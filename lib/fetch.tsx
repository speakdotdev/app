import { connectRealm } from './realm';
import fetch from 'isomorphic-unfetch';

export async function fetchUser() {
  try {
    const res = await fetch(`http://localhost:3000/api/me`);
    const data = res.json();
    return data;
  } catch (e) {
    return e;
  }
}

export async function fetchGraphQLQuery(query) {
  const accessToken = await connectRealm();

  const res = await fetch(process.env.REALM_URI, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ query: query }),
  });
  const data = await res.json();
  return data.data;
}

export async function fetchGraphQLMutation(mutation) {
  const accessToken = await connectRealm();

  const res = await fetch(process.env.REALM_URI, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ query: mutation }),
  });
  const data = await res.json();
  return data.data;
}
