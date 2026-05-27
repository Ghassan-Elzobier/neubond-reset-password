import { list } from '@vercel/blob';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Check token
    const token = request.nextUrl.searchParams.get('token');
    
    if (token !== process.env.DOCUMENT_ACCESS_TOKEN) {
      return new Response('Forbidden', { status: 403 });
    }

    const { blobs } = await list({ 
      prefix: 'document',
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });
    
    if (!blobs.length) {
      return new Response('Document not found', { status: 404 });
    }

    const pdfRes = await fetch(blobs[0].url, {
      headers: {
        Authorization: `Bearer ${process.env.BLOB_READ_WRITE_TOKEN}`,
      }
    });

    const pdfBuffer = await pdfRes.arrayBuffer();

    return new Response(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Neubond-IFU.pdf"',
        'Content-Length': pdfBuffer.byteLength.toString(),
      }
    });
    
  } catch (error) {
    console.error('Document serve error:', error);
    return new Response(`Error: ${error}`, { status: 500 });
  }
}