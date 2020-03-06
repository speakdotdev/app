import { ObjectID } from 'mongodb';

const events = async (parents, args, context, info) => {
    const data = await context.db.collection('events').find().toArray();
    return data
}
const event = async (parents, args, context, info) => {
    return { name: 'NG-Conf' }
}

const users = async (parents, args, context, info) => {
    let data = await context.db.collection('users').find().toArray();

    return data;
}

const user = async (parents, args, context, info) => {
    let data = await context.db.collection('users').findOne({ _id: new ObjectID(args._id) });

    return data;
}

const addEvent = async (parents, args, context, info) => {
    let data = await context.db.collection('events').insertOne(args);
    console.log(data.ops[0])
    return data.ops[0];
}

const Resolvers = {
    Query: {
        users,
        user,
        events,
        event
    },
    Mutation: {
        addEvent
    }
};

export default Resolvers;