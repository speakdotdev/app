import { gql } from 'apollo-server-micro';
import presentation from './presentation';

const mutation = gql`
  type Mutation
`;

const mutations = [mutation, presentation];

export default mutations;
