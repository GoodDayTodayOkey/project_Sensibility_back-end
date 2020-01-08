import { GraphQLObjectType } from 'graphql';

import { userMutation, companyMutation } from '../index';


class Mutation {
  public name = 'Mutation';
  public fields = {
    ...userMutation,
    ...companyMutation,
  };
}

const mutation = new GraphQLObjectType(new Mutation());
export default mutation;