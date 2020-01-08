import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean } from 'graphql';
import { User, Company, Comment } from '../index'


class CommentSchema {
  public name = 'Comment';
  public fields = () => (commentFields);
}

const commentType = new GraphQLObjectType(new CommentSchema());

const commentFields = {
  commentId: { type: GraphQLID },
  message: { type: GraphQLString },
  authorID: {
    type: GraphQLString,
    resolve(parent, args) {
      return User.find({});
    }
  },
  companyLogo: {
    type: GraphQLString,
    resolve(parent, args) {
      return Company.find({});
    }
  },
  time: { type: GraphQLString },
  isShowed: { type: GraphQLBoolean },
}

const commentQuery = {
  authUser: {
    type: commentType,
    args: { login: { type: GraphQLString }, password: { type: GraphQLString } },
    resolve(parent, args) {
      return Comment.findOne({ ...args });
    }
  },
}

export { commentFields, commentType, commentQuery };