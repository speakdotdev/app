import { gql, mergeSchemas } from 'apollo-server-micro';
import user from './user';
import profile from './profile';
import presentation from './presentation';

const query = gql`
  type Query
`;

const queries = [query, user, profile, presentation];

export default queries;
