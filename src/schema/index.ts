import * as graphql from 'graphql';

import UserType from './User/User';
import CommentType from './Comment/Comment';
import SensibilityType from './Sensibility/Sensibility';
import CompanyType from './Company/Company';


const { GraphQLObjectType, GraphQLID, GraphQLSchema } = graphql;

class Query {
  public name = 'Query';
  public fields = {
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {

      }
    }
  };
}


class Mutation {
  public name = 'Query';
  public fields = {
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {

      }
    }
  };
}


const query = new GraphQLObjectType(new Query());
const schema = new GraphQLSchema({ query });
export { schema, UserType, CommentType, SensibilityType, CompanyType };