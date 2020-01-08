import { GraphQLSchema } from 'graphql';

import { userQuery, userFields, userMutation } from './User/User';
import { companyQuery, companyFields, companyMutation } from './Company/Company';
import { commentQuery, commentFields, commentType } from './Comment/Comment';
import { sensibilityQuery, sensibilityFields, sensibilityType } from './Sensibility/Sensibility';
import query from './Query/Query';
import mutation from './Mutation/Mutation';
import { User, Company, Sensibility, Comment } from '../models';
const schema = new GraphQLSchema({ query, mutation });
export {
  schema,
  User,
  userFields,
  userQuery,
  userMutation,
  Company,
  companyFields,
  companyQuery,
  companyMutation,
  Sensibility,
  sensibilityFields,
  sensibilityQuery,
  sensibilityType,
  Comment,
  commentType,
  commentFields,
  commentQuery,
};