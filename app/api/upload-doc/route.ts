import { put } from '@vercel/blob';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-secret-key');
  if (secret !== process.env.UPLOAD_SECRET) {
    return new Response('Unauthorized', { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get('file') as File;

  if (!file) {
    return new Response('No file provided', { status: 400 });
  }

  await put('document.pdf', file, {
    access: 'public',
    allowOverwrite: true,
  });

  return new Response('OK', { status: 200 });
}