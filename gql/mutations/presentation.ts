import { gql } from 'apollo-server-micro';

const presentation = gql`
  extend type Mutation {
    addPresentation(title: String!): Presentation
  }
`;

export default presentation;
