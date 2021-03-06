import { gql } from 'apollo-server-micro';

const Presentation = gql`
  type Presentation {
    _id: String
    title: String
    subtitle: String
    abstract: String
    content: String
    description: String
    notes: String
    ownerId: String
    isForkable: Boolean
    tags: [String]
    #owner: User
  }
`;

export default Presentation;
