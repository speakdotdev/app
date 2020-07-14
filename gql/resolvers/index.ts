import { me } from './user';
import { profile } from './profile';
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
    profile,
  },

  Mutation: {
    addPresentation,
  },
};

export default resolvers;
