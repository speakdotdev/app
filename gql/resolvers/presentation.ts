import { ObjectID } from 'mongodb';

const addPresentation = async (parent, args, ctx) => {
  const data = await ctx.db.collection('presentations').insertOne({
    title: args.title,
    subtitle: args.subtitle,
    ownerId: ctx.session.user.sub,
    abstract: args.abstract,
  });

  return data.ops[0];
};

const getOnePresentation = async (parent, args, ctx) => {
  const data = await ctx.db.collection('presentations').findOne();

  return data;
};

const presentation = async (parent, args, ctx) => {
  const data = await ctx.db.collection('presentations').findOne();

  return data;
};

const presentations = async (parent, args, ctx) => {
  console.log(ctx.session);
  const data = await ctx.db.collection('presentations').find().toArray();

  return data;
};

const myPresentations = async (parent, args, ctx) => {
  const user = ctx.session.user;

  if (!user) {
    return [];
  }
  const data = await ctx.db
    .collection('presentations')
    .find({ ownerId: user.sub })
    .toArray();

  return data;
};

export {
  addPresentation,
  getOnePresentation,
  presentation,
  presentations,
  myPresentations,
};
