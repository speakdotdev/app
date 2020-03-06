import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const Mutations = gql`
  type Mutation {
    addEvent(name: String!): Event
  }
`;

export default Mutations;