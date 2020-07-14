import { gql } from 'apollo-server-micro';

const Profile = gql`
  type Profile {
    _id: String
    username: String
    name: String
    nickname: String
    picture: String
    presentations: [Presentation]
  }
`;

export default Profile;
