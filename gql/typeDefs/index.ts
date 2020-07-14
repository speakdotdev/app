import queries from '../queries';
import mutations from '../mutations';
import Presentation from './presentation';
import User from './user';
import Profile from './profile';

const types = [User, Profile, Presentation, ...queries, ...mutations];

export default types;
