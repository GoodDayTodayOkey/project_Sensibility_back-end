import * as graphql from 'graphql';
import { User } from '../../models'
import { UserType } from '../index';

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = graphql;

class CompanySchema {
  public name = 'Company';
  public fields = () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    address: { type: GraphQLString },
    phone: { type: GraphQLString },
    stashID: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return User.find({});
      }
    },
    logo: { type: GraphQLString },
  });
}

const CompanyType = new GraphQLObjectType(new CompanySchema());

export default CompanyType;