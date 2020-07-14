import me from './user';
import {
  presentation,
  presentations,
  myPresentations,
  addPresentation,
  getOnePresentation,
} from './presentation';

const resolvers = {
  Query: {
    getOnePresentation,
    presentation,
    presentations,
    myPresentations,
    me,
  },
  Mutation: {
    addPresentation,
  },
};

export default resolvers;
