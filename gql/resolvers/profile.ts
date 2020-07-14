import ObjectId from 'mongodb';

const profile = async (parent, args, ctx) => {
  const username = args._id;
  console.log(username);
  const data = await ctx.db.collection('users').findOne({ username: username });

  return data;
};

export { profile };
