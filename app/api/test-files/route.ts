export async function GET() {
  try {
    // Get access token
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

    // Step 1 — First find the correct drive ID
    const drivesRes = await fetch(
      `https://graph.microsoft.com/v1.0/sites/neubond.sharepoint.com,${process.env.SHAREPOINT_SITE_ID}/drives`,
      {
        headers: { Authorization: `Bearer ${access_token}` }
      }
    );
    const drives = await drivesRes.json();

    return new Response(JSON.stringify(drives, null, 2), {
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    return new Response(`Error: ${error}`, { status: 500 });
  }
}