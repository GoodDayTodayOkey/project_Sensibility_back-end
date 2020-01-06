import * as graphql from 'graphql';
import { Comment, Company, User } from '../../models'
import { CommentType } from '../index';

const { GraphQLObjectType, GraphQLID, GraphQLFloat, GraphQLList } = graphql;

class SensibilitySchema {
  public name = 'Sensibility';
  public fields = () => ({
    id: { type: GraphQLID },
    availableGoodwill: {
      type: GraphQLFloat,
      resolve(parent, args) {
        return User.find({});
      }
    },
    availableHostility: {
      type: GraphQLFloat,
      resolve(parent, args) {
        return User.find({});
      }
    },
    commonGoodwill: {
      type: GraphQLFloat,
      resolve(parent, args) {
        return Company.find({});
      }
    },
    commonHostility: {
      type: GraphQLFloat,
      resolve(parent, args) {
        return Company.find({});
      }
    },
    commentsHistoryID: {
      type: new GraphQLList(CommentType),
      resolve(parent, args) {
        return Comment.find({});
      }
    },
  });
}

const SensibilityType = new GraphQLObjectType(new SensibilitySchema());

export default SensibilityType;