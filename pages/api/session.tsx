import auth0 from '../../lib/auth0';

export default async function session(req, res) {
  try {
    let session = await auth0.getSession(req);
    res.json(session);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
    res.json(error);
  }
}
