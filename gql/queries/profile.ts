import { gql } from 'apollo-server-micro';

const profile = gql`
  extend type Query {
    profile(_id: String!): Profile
  }
`;

export default profile;
