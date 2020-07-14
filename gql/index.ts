import { makeExecutableSchema } from 'apollo-server-micro';
import types from './typeDefs';
import resolvers from './resolvers';
import { type } from 'os';
import { defaultCipherList } from 'constants';

const typeDefs = [];
typeDefs.push(...types);

const schema = makeExecutableSchema({
  typeDefs: [...types],
  resolvers: resolvers,
});

export default schema;
