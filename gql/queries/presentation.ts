import { gql } from 'apollo-server-micro';

const presentation = gql`
  extend type Query {
    getOnePresentation: Presentation
    presentation(_id: String!): Presentation
    presentations: [Presentation]
  }
`;

export default presentation;
