import { gql } from 'apollo-server-micro';

const User = gql`
  type User {
    _id: String
    name: String
    nickname: String
    picture: String
  }
`;

export default User;
