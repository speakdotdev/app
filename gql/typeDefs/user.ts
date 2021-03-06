import { gql } from 'apollo-server-micro';

const User = gql`
  type User {
    _id: String
    username: String
    name: String
    nickname: String
    picture: String
    presentations: [Presentation]
  }
`;

export default User;
