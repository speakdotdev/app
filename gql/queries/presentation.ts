import { gql } from 'apollo-server-micro';

const presentation = gql`
  extend type Query {
    getOnePresentation: Presentation
    presentation(_id: String!): Presentation
    presentations: [Presentation]
    myPresentations: [Presentation]
  }
`;

export default presentation;
