import { gql } from 'apollo-server-micro';

const presentation = gql`
  extend type Mutation {
    addPresentation(
      title: String!
      subtitle: String
      ownerId: String
      abstract: String
    ): Presentation
  }
`;

export default presentation;
