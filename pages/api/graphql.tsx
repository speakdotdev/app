import { ApolloServer, makeExecutableSchema } from 'apollo-server-micro';
import database from '../../lib/database/mongodb';
import Queries from '../../lib/schema/Queries';
import TypeDefs from '../../lib/schema/TypeDefs';
import Resolvers from '../../lib/schema/Resolvers';
import Mutations from '../../lib/schema/Mutations';

const typeDefs = [];
typeDefs[0] = Queries;
typeDefs[1] = Mutations;
typeDefs.push(...TypeDefs);

const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: Resolvers
});

const apolloServer = new ApolloServer({
  schema,
  context: async req => {
    const db = await database();
    return { db };
  }
});

export const config = {
  api: {
    bodyParser: false
  }
};

export default apolloServer.createHandler({ path: '/api/graphql' });
