const fs = require('fs/promises');
const path = require('path');

const outputPath = 'instagram-feed-cache.json';
const assetsDir = path.join('assets', 'instagram');
const fields = 'id,caption,media_type,media_url,permalink,thumbnail_url,timestamp';

function getInstagramUrl() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;
  const baseUrl = userId
    ? `https://graph.facebook.com/v20.0/${encodeURIComponent(userId)}/media`
    : 'https://graph.instagram.com/me/media';

  const url = new URL(baseUrl);
  url.searchParams.set('fields', fields);
  url.searchParams.set('limit', '9');
  url.searchParams.set('access_token', token);
  return url;
}

function getImageExtension(contentType) {
  if (contentType.includes('png')) return 'png';
  if (contentType.includes('webp')) return 'webp';
  return 'jpg';
}

async function downloadImage(imageUrl, postId, index) {
  if (!imageUrl) return '';

  const response = await fetch(imageUrl);
  if (!response.ok) {
    console.warn(`Skipped image for ${postId}: ${response.status}`);
    return '';
  }

  const contentType = response.headers.get('content-type') || 'image/jpeg';
  const extension = getImageExtension(contentType);
  const safeId = String(postId || `post-${index + 1}`).replace(/[^a-zA-Z0-9_-]/g, '');
  const fileName = `${String(index + 1).padStart(2, '0')}-${safeId}.${extension}`;
  const filePath = path.join(assetsDir, fileName);
  const imageBuffer = Buffer.from(await response.arrayBuffer());

  await fs.writeFile(filePath, imageBuffer);
  return filePath.replaceAll(path.sep, '/');
}

async function main() {
  if (!process.env.INSTAGRAM_ACCESS_TOKEN) {
    throw new Error('INSTAGRAM_ACCESS_TOKEN is missing');
  }

  const response = await fetch(getInstagramUrl());
  const payload = await response.json();

  if (!response.ok) {
    throw new Error(payload.error?.message || `Instagram API ${response.status}`);
  }

  const posts = Array.isArray(payload.data) ? payload.data : [];
  await fs.rm(assetsDir, { recursive: true, force: true });
  await fs.mkdir(assetsDir, { recursive: true });

  const cachedPosts = [];
  for (const [index, post] of posts.entries()) {
    const sourceImageUrl = post.media_url || post.thumbnail_url || '';
    const localImageUrl = await downloadImage(sourceImageUrl, post.id, index);
    cachedPosts.push({
      id: post.id,
      caption: post.caption || '',
      media_type: post.media_type || 'IMAGE',
      media_url: localImageUrl,
      source_media_url: sourceImageUrl,
      thumbnail_url: localImageUrl,
      permalink: post.permalink || '',
      timestamp: post.timestamp || ''
    });
  }

  const cache = {
    generatedAt: new Date().toISOString(),
    data: cachedPosts
  };

  await fs.writeFile(outputPath, `${JSON.stringify(cache, null, 2)}\n`);
  console.log(`Wrote ${cache.data.length} Instagram posts to ${outputPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
