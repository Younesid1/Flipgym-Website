const INSTAGRAM_FIELDS = 'id,caption,media_type,media_url,permalink,thumbnail_url,timestamp';

function sendJson(response, statusCode, payload) {
  response.statusCode = statusCode;
  response.setHeader('Content-Type', 'application/json; charset=utf-8');
  response.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate=3600');
  response.end(JSON.stringify(payload));
}

function getInstagramUrl() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;
  const baseUrl = userId
    ? `https://graph.facebook.com/v20.0/${encodeURIComponent(userId)}/media`
    : 'https://graph.instagram.com/me/media';

  const url = new URL(baseUrl);
  url.searchParams.set('fields', INSTAGRAM_FIELDS);
  url.searchParams.set('limit', '9');
  url.searchParams.set('access_token', token);
  return url;
}

function toLocalInstagramImageUrl(imageUrl) {
  if (!imageUrl) return '';
  return `/api/instagram-image?url=${encodeURIComponent(imageUrl)}`;
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

module.exports = async function handler(request, response) {
  if (request.method !== 'GET') {
    sendJson(response, 405, { error: 'Method not allowed' });
    return;
  }

  if (!process.env.INSTAGRAM_ACCESS_TOKEN) {
    sendJson(response, 500, { error: 'INSTAGRAM_ACCESS_TOKEN manquant' });
    return;
  }

  try {
    sendJson(response, 200, { data: await fetchInstagramPosts() });
  } catch (error) {
    sendJson(response, Number(error.statusCode || 502), { error: error.message });
  }
};
