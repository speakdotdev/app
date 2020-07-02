import jwt from 'jsonwebtoken';

let accessToken = null;
let refreshToken = null;

async function getNewAccessToken() {
  const res = await fetch(
    'https://realm.mongodb.com/api/client/v2.0/auth/session',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${refreshToken}`,
      },
    }
  );
  const token = await res.json();
  accessToken = token.access_token;

  return accessToken;
}

export async function connectRealm() {
  if (accessToken) {
    const token = jwt.decode(accessToken);
    const now = new Date();
    if (token.exp < now.getTime() / 1000) {
      return await getNewAccessToken();
    } else {
      return accessToken;
    }
  }
  try {
    const res = await fetch(
      'https://realm.mongodb.com/api/client/v2.0/app/speakdotdev-fntxz/auth/providers/api-key/login',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          key:
            'MGnMimJ0enl50WGRsYAVdwQRenQPfkoMYECyXOoggbXCQdoPzSlYKR88kC04GsER',
        }),
      }
    );
    const tokens = await res.json();

    accessToken = tokens.access_token;
    refreshToken = tokens.refresh_token;
  } catch (err) {
    console.log(err);
  }
  return accessToken;
}
