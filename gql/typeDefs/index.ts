import queries from '../queries';
import mutations from '../mutations';
import Presentation from './presentation';
import User from './user';

const types = [User, Presentation, ...queries, ...mutations];

export default types;
