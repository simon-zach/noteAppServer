const { User } = require("../models");

module.exports =  {
    hello: () => 'Hello world!',
    notes:  async (parent, args, {models})=>{
      return await models.Note.find()
    },
    note: async (parent, args, {models}) => {
      
      return await models.Note.findById(args.id);
    },
    user: async (parent, {username}, {models,user})=>{
      return await models.User.findOne({username});
    },
    users: async (parent, args, {models,user})=>{
      return models.User.find({});
    },
    me: async (parent, args,{models,user})=>{
      return models.User.findById(user.id);
    },
   
  }