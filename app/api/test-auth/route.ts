export async function GET() {
  try {
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

    const data = await tokenRes.json();

    // Show full response so we can see what's wrong
    return new Response(JSON.stringify({
      status: tokenRes.status,
      has_access_token: !!data.access_token,
      token_type: data.token_type,
      error: data.error,
      error_description: data.error_description,
      // Show first 20 chars of token if it exists
      token_preview: data.access_token ? data.access_token.substring(0, 20) + '...' : 'NO TOKEN',
    }, null, 2), { 
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    return new Response(`Error: ${error}`, { status: 500 });
  }
}