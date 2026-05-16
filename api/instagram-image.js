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

function getQueryUrl(request) {
  const host = request.headers.host || 'localhost';
  const requestUrl = new URL(request.url, `https://${host}`);
  return requestUrl.searchParams.get('url') || '';
}

module.exports = async function handler(request, response) {
  if (request.method !== 'GET') {
    response.statusCode = 405;
    response.setHeader('Content-Type', 'text/plain; charset=utf-8');
    response.end('Method not allowed');
    return;
  }

  const imageUrl = getQueryUrl(request);
  if (!isAllowedInstagramImageUrl(imageUrl)) {
    response.statusCode = 400;
    response.setHeader('Content-Type', 'text/plain; charset=utf-8');
    response.end('Invalid image URL');
    return;
  }

  try {
    const imageResponse = await fetch(imageUrl);
    if (!imageResponse.ok) {
      response.statusCode = imageResponse.status;
      response.setHeader('Content-Type', 'text/plain; charset=utf-8');
      response.end('Image unavailable');
      return;
    }

    const contentType = imageResponse.headers.get('content-type') || 'image/jpeg';
    const imageBuffer = Buffer.from(await imageResponse.arrayBuffer());
    response.statusCode = 200;
    response.setHeader('Content-Type', contentType);
    response.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=604800');
    response.end(imageBuffer);
  } catch (error) {
    response.statusCode = 502;
    response.setHeader('Content-Type', 'text/plain; charset=utf-8');
    response.end('Image proxy error');
  }
};
