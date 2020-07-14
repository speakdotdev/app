import { connectRealm } from '../../lib/realm';
import auth0 from '../../lib/auth0';

export default async (req, res) => {
  let query = req.body;
  console.log(query);

  let accessToken = await connectRealm();
  let data = await fetch(process.env.REALM_URI, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ query: query }),
  });
  let final = await data.json();

  res.json(final);
};
