import { GraphQLObjectType } from 'graphql';
import { userQuery, companyQuery, commentQuery, sensibilityQuery } from '../index';



class Query {
  public name = 'Query';
  public fields = {
    ...userQuery,
    ...companyQuery,
    ...commentQuery,
    ...sensibilityQuery,
  };
}

const query = new GraphQLObjectType(new Query());

export default query;