import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLFloat } from 'graphql';
import { Comment, Company, User } from '../index'
import * as uuidv1 from 'uuid/v1';

class UserSchema {
  public name = 'User';
  public fields = () => (userFields);
}

const userType = new GraphQLObjectType(new UserSchema());

const userFields = {
  id: { type: GraphQLID },
  login: { type: GraphQLString },
  password: { type: GraphQLString },
  name: { type: GraphQLString },
  email: { type: GraphQLString },
  phone: { type: GraphQLString },
  status: { type: GraphQLString! },
  commentsID: {
    type: new GraphQLList(GraphQLString)!,
    resolve(parent, args) {
      return Comment.find({});
    }
  },
  companyID: {
    type: GraphQLString!,
    resolve(parent, args) {
      return Company.find({});
    }
  },
  availableGoodwill: { type: GraphQLFloat! },
  availableHostility: { type: GraphQLFloat! },
}

const userMutation = {
  createUser: {
    type: userType,
    args: { ...userFields },
    resolve(parent, args) {
      const newUser = new User({ id: uuidv1(), ...args, status: `User created ${new Date(Date.now())}` });
      newUser.save();
      return { status: `User created ${new Date(Date.now())}` };
    }
  },
  updateUser: {
    type: userType,
    args: {
      id: { type: GraphQLID },
      login: { type: GraphQLString! },
      password: { type: GraphQLString! },
      name: { type: GraphQLString! },
      email: { type: GraphQLString! },
      phone: { type: GraphQLString! },
    },
    resolve(parent, args) {
      const { id, ...restArgs } = args;
      User.findOneAndUpdate({ id }, { ...restArgs, status: `User updated ${new Date(Date.now())}` }).then(data => data);
      return { status: `User created ${new Date(Date.now())}` };
    }
  },
  deleteUser: {
    type: userType,
    args: { id: { type: GraphQLID } },
    resolve(parent, args) {
      const { id } = args;
      User.findOneAndDelete({ id }).then(data => data);
      return { status: `User with ${id} deleted` }
    }
  }
}

const userQuery = {
  authUser: {
    type: userType,
    args: { login: { type: GraphQLString }, password: { type: GraphQLString } },
    resolve(parent, args) {
      return User.findOne({ ...args });
    }
  },
}

export { userFields, userMutation, userQuery };