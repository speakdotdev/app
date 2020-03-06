import { gql } from 'apollo-server-micro';

const Queries = gql`
  type Query {
    user(_id: String): User
    users: [User]
    event: Event
    events: [Event]
  }
`;


export default Queries;