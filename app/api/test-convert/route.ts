import { put } from '@vercel/blob';

export async function GET() {
  try {
    // Get Azure access token
    const tokenRes = await fetch(
      `https://login.microsoftonline.com/${process.env.AZURE_TENANT_ID}/oauth2/v2.0/token`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          client_id: process.env.AZURE_CLIENT_ID!,
          client_secret: process.env.AZURE_CLIENT_SECRET!,
          scope: 'https://graph.microsoft.com/.default',
          grant_type: 'client_credentials',
        }),
      }
    );
    const { access_token } = await tokenRes.json();

    // Fetch and convert file
    const filePath = "0. QMS/1. DHF Loop I/3. Phase III - Design Outputs/IFU & Labels (manufacturer information)/NBD-LP1-IFU-001 Rev 01 Neubond IFU.docx";

    const fileRes = await fetch(
        `https://graph.microsoft.com/v1.0/drives/b!r3RlGcbS5kakGaO6-Xf3r6BZRHN6UiNOiGRGWaW1cFReOUKxLVzFQI95Vg1r9A1L/root:/${encodeURIComponent(filePath)}:/content?format=pdf`,
    {
        headers: { Authorization: `Bearer ${access_token}` }
    }
    );

    if (!fileRes.ok) {
      const error = await fileRes.text();
      return new Response(`Failed: ${error}`, { status: 500 });
    }

    const pdfBuffer = await fileRes.arrayBuffer();

    await put('document.pdf', pdfBuffer, {
      access: 'public',
      allowOverwrite: true,
      contentType: 'application/pdf',
    });

    return new Response('✅ PDF converted and stored successfully!', { status: 200 });

  } catch (error) {
    return new Response(`❌ Error: ${error}`, { status: 500 });
  }
}