const me = async (parent, args, ctx) => {
  console.log(args);
  console.log(ctx.session.user);
  return ctx.session.user;
};

export { me };
