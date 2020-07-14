import { ApolloServer, gql } from 'apollo-server-micro';
import { connectToDatabase } from '../../lib/mongodb';
import schema from '../../gql/index';
import auth0 from '../../lib/auth0';
import Cors from 'micro-cors';

const apolloServer = new ApolloServer({
  schema,
  context: async ({ req, res }) => ({
    db: await connectToDatabase(),
    session: await auth0.getSession(req),
  }),
  playground: {
    settings: {
      'request.credentials': 'same-origin',
    },
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const cors = Cors({
  methods: ['POST', 'OPTIONS'],
});

const handler = apolloServer.createHandler({ path: '/api/graphql' });

export default handler;
/*
export default cors((req, res) => {
  console.log(req.method);
  req.method === 'OPTIONS' ? res.end() : handler(req, res);
});
*/
