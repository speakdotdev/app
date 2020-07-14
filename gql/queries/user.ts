import { gql } from 'apollo-server-micro';

const user = gql`
  extend type Query {
    user: User
    me: User
  }
`;

export default user;
