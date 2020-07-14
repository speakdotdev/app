import { gql, mergeSchemas } from 'apollo-server-micro';
import user from './user';
import presentation from './presentation';

const query = gql`
  type Query
`;

const queries = [query, user, presentation];

export default queries;
