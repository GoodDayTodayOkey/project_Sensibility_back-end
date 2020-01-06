import * as graphql from 'graphql';
import { Comment, Company } from '../../models'
import { CommentType, CompanyType } from '../index';

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLFloat } = graphql;

class UserSchema {
  public name = 'User';
  public fields = () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    commentsID: {
      type: new GraphQLList(GraphQLString),
      resolve(parent, args) {
        return Comment.find({});
      }
    },
    companyID: {
      type: GraphQLString,
      resolve(parent, args) {
        return Company.find({});
      }
    },
    availableGoodwill: { type: GraphQLFloat },
    availableHostility: { type: GraphQLFloat },
  });
}

const UserType = new GraphQLObjectType(new UserSchema());

export default UserType;