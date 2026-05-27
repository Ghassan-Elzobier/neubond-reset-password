import { list } from '@vercel/blob';

export async function GET() {
  const { blobs } = await list({ prefix: 'document' });

  if (!blobs.length) {
    return new Response('Not found', { status: 404 });
  }

  return Response.redirect(blobs[0].url);
}