import * as graphql from 'graphql';
import { User, Company } from '../../models'

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean } = graphql;

class CommentSchema {
  public name = 'Company';
  public fields = () => ({
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
  });
}

const CommentType = new GraphQLObjectType(new CommentSchema());

export default CommentType;