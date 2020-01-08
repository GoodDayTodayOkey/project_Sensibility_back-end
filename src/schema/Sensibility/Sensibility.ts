import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLFloat } from 'graphql';
import { Comment, Company, User, commentType, Sensibility } from '../index'

class SensibilitySchema {
  public name = 'Sensibility';
  public fields = () => (sensibilityFields);
}

const sensibilityType = new GraphQLObjectType(new SensibilitySchema());

const sensibilityFields = {
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
    type: new GraphQLList(commentType),
    resolve(parent, args) {
      return Comment.find({});
    }
  },
}

const sensibilityQuery = {
  findSensibility: {
    type: sensibilityType,
    args: { login: { type: GraphQLString }, password: { type: GraphQLString } },
    resolve(parent, args) {
      return Sensibility.findOne({ ...args });
    }
  },
}

export { sensibilityType, sensibilityFields, sensibilityQuery }