import { ObjectID } from 'mongodb';

const events = async (parents, args, context, info) => {
  const data = await context.db
    .collection('events')
    .find()
    .toArray();
  return data;
};
const event = async (parents, args, context, info) => {
  return { name: 'NG-Conf' };
};

const users = async (parents, args, context, info) => {
  let data = await context.db
    .collection('users')
    .find()
    .toArray();

  return data;
};

const user = async (parents, args, context, info) => {
  let data = await context.db.collection('users').findOne();

  return data;
};

const addEvent = async (parents, args, context, info) => {
  let data = await context.db.collection('events').insertOne(args);
  console.log(data.ops[0]);
  return data.ops[0];
};

const upcomingTalks = async (parents, args, context, info) => {
  return await context.db
    .collection('talks')
    .find({
      speakerId: args.speakerId,
      date: { $gte: new Date() }
    })
    .limit(10);
};

const Resolvers = {
  Query: {
    users,
    user,
    events,
    event,
    upcomingTalks
  },
  Mutation: {
    addEvent
  }
};

export default Resolvers;
