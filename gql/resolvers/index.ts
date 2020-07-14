import me from './user';
import {
  presentation,
  presentations,
  addPresentation,
  getOnePresentation,
} from './presentation';

const resolvers = {
  Query: {
    getOnePresentation,
    presentation,
    presentations,
    me,
  },
  Mutation: {
    addPresentation,
  },
};

export default resolvers;
