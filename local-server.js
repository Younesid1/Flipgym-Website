const http = require('http');
const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const port = Number(process.env.PORT || 4173);

function loadEnv() {
  const envPath = path.join(rootDir, '.env');
  if (!fs.existsSync(envPath)) return;

  const lines = fs.readFileSync(envPath, 'utf8').split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const separatorIndex = trimmed.indexOf('=');
    if (separatorIndex === -1) continue;

    const key = trimmed.slice(0, separatorIndex).trim();
    let value = trimmed.slice(separatorIndex + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (key && process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store'
  });
  response.end(JSON.stringify(payload));
}

function getInstagramUrl() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;
  const fields = 'id,caption,media_type,media_url,permalink,thumbnail_url,timestamp';
  const baseUrl = userId
    ? `https://graph.facebook.com/v20.0/${encodeURIComponent(userId)}/media`
    : 'https://graph.instagram.com/me/media';

  const url = new URL(baseUrl);
  url.searchParams.set('fields', fields);
  url.searchParams.set('limit', '9');
  url.searchParams.set('access_token', token);
  return url;
}

async function handleInstagramFeed(response) {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) {
    sendJson(response, 500, {
      error: 'INSTAGRAM_ACCESS_TOKEN manquant dans .env'
    });
    return;
  }

  try {
    sendJson(response, 200, { data: await fetchInstagramPosts() });
  } catch (error) {
    const statusCode = Number(error.statusCode || 502);
    sendJson(response, statusCode, { error: error.message });
  }
}

async function fetchInstagramPosts() {
  const instagramResponse = await fetch(getInstagramUrl());
  const payload = await instagramResponse.json();

  if (!instagramResponse.ok) {
    const error = new Error(payload.error?.message || 'Erreur Instagram');
    error.statusCode = instagramResponse.status;
    throw error;
  }

  const posts = Array.isArray(payload.data) ? payload.data : [];
  return posts.map((post) => ({
    id: post.id,
    caption: post.caption || '',
    media_type: post.media_type || 'IMAGE',
    media_url: toLocalInstagramImageUrl(post.media_url || post.thumbnail_url || ''),
    thumbnail_url: post.thumbnail_url || '',
    permalink: post.permalink || '',
    timestamp: post.timestamp || ''
  }));
}

function toLocalInstagramImageUrl(imageUrl) {
  if (!imageUrl) return '';
  return `/api/instagram-image?url=${encodeURIComponent(imageUrl)}`;
}

function isAllowedInstagramImageUrl(imageUrl) {
  try {
    const parsedUrl = new URL(imageUrl);
    return (
      parsedUrl.protocol === 'https:' &&
      (
        parsedUrl.hostname.endsWith('.cdninstagram.com') ||
        parsedUrl.hostname.endsWith('.fbcdn.net') ||
        parsedUrl.hostname === 'cdninstagram.com'
      )
    );
  } catch (error) {
    return false;
  }
}

async function handleInstagramImage(request, response) {
  const requestUrl = new URL(request.url, `http://${request.headers.host}`);
  const imageUrl = requestUrl.searchParams.get('url') || '';

  if (!isAllowedInstagramImageUrl(imageUrl)) {
    response.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Invalid image URL');
    return;
  }

  try {
    const imageResponse = await fetch(imageUrl);
    if (!imageResponse.ok) {
      response.writeHead(imageResponse.status, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('Image unavailable');
      return;
    }

    const contentType = imageResponse.headers.get('content-type') || 'image/jpeg';
    const imageBuffer = Buffer.from(await imageResponse.arrayBuffer());
    response.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-store'
    });
    response.end(imageBuffer);
  } catch (error) {
    response.writeHead(502, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Image proxy error');
  }
}

function getContentType(filePath) {
  const extension = path.extname(filePath).toLowerCase();
  const types = {
    '.css': 'text/css; charset=utf-8',
    '.avif': 'image/avif',
    '.gif': 'image/gif',
    '.html': 'text/html; charset=utf-8',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.js': 'text/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.pdf': 'application/pdf',
    '.png': 'image/png',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp'
  };
  return types[extension] || 'application/octet-stream';
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function truncate(value, maxLength = 140) {
  const text = String(value || '').replace(/\s+/g, ' ').trim();
  return text.length > maxLength ? `${text.slice(0, maxLength - 1).trim()}…` : text;
}

function renderInstagramCards(posts, cardClass, mediaClass, placeholderClass, limit) {
  return posts.slice(0, limit).map((post) => {
    const media = post.media_url
      ? `<img src="${escapeHtml(post.media_url)}" alt="${escapeHtml(post.caption || 'Publication Instagram Flipgym')}" loading="lazy" />`
      : `<span class="${placeholderClass}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></span>`;
    const caption = post.caption
      ? `<span class="post-body"><span class="post-caption is-clamped">${escapeHtml(truncate(post.caption))}</span></span>`
      : '';

    return `<a class="${cardClass}" href="${escapeHtml(post.permalink)}" target="_blank" rel="noreferrer" aria-label="Ouvrir la publication Instagram"><span class="${mediaClass}">${media}</span>${caption}</a>`;
  }).join('');
}

async function injectInstagramIntoHtml(filePath, content) {
  const fileName = path.basename(filePath);
  if (fileName !== 'actualite.html' && fileName !== 'index.html') return content;
  if (!process.env.INSTAGRAM_ACCESS_TOKEN) return content;

  try {
    const posts = await fetchInstagramPosts();
    if (!posts.length) return content;

    if (fileName === 'actualite.html') {
      const cards = renderInstagramCards(posts, 'post-card', 'post-media', 'post-placeholder', 9);
      return content.replace('<div class="feed-grid" id="feedGrid"></div>', `<div class="feed-grid" id="feedGrid">${cards}</div>`);
    }

    const cards = renderInstagramCards(posts, 'home-instagram-post', 'home-instagram-media', 'home-instagram-placeholder', 6);
    return content.replace('<div class="home-instagram-grid" id="homeInstagramGrid"></div>', `<div class="home-instagram-grid" id="homeInstagramGrid">${cards}</div>`);
  } catch (error) {
    console.warn(`Injection Instagram ignorée: ${error.message}`);
    return content;
  }
}

function serveStatic(request, response) {
  const requestUrl = new URL(request.url, `http://${request.headers.host}`);
  const decodedPath = decodeURIComponent(requestUrl.pathname);
  const normalizedPath = path.normalize(decodedPath).replace(/^(\.\.[/\\])+/, '');
  const relativePath = normalizedPath === '/' ? '/index.html' : normalizedPath;
  const filePath = path.join(rootDir, relativePath);

  if (!filePath.startsWith(rootDir)) {
    response.writeHead(403);
    response.end('Forbidden');
    return;
  }

  fs.readFile(filePath, async (error, content) => {
    if (error) {
      response.writeHead(error.code === 'ENOENT' ? 404 : 500);
      response.end(error.code === 'ENOENT' ? 'Not found' : 'Server error');
      return;
    }

    const body = getContentType(filePath).startsWith('text/html')
      ? await injectInstagramIntoHtml(filePath, content.toString('utf8'))
      : content;

    response.writeHead(200, {
      'Content-Type': getContentType(filePath),
      'Cache-Control': 'no-store'
    });
    response.end(body);
  });
}

loadEnv();

const server = http.createServer((request, response) => {
  if (request.url.startsWith('/api/instagram-feed')) {
    handleInstagramFeed(response);
    return;
  }

  if (request.url.startsWith('/api/instagram-image')) {
    handleInstagramImage(request, response);
    return;
  }

  serveStatic(request, response);
});

server.listen(port, () => {
  console.log(`Flipgym local: http://127.0.0.1:${port}`);
});
