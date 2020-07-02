import { connectRealm } from '../../lib/realm';

export default async (req, res) => {
  let query = req.body;
  let accessToken = await connectRealm();
  let data = await fetch(
    'https://stitch.mongodb.com/api/client/v2.0/app/speakdotdev-fntxz/graphql',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ query: query }),
    }
  );
  let final = await data.json();

  res.json(final);
};
