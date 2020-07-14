import { gql } from 'apollo-server-micro';

const user = gql`
  extend type Query {
    me: User
  }
`;

export default user;
