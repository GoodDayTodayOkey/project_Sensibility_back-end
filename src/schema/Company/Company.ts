import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } from 'graphql';
import { User, Company } from '../index'
import * as uuidv1 from 'uuid/v1';


class CompanySchema {
  public name = 'Company';
  public fields = () => (companyFields);
}

const companyType = new GraphQLObjectType(new CompanySchema());

const companyFields = {
  id: { type: GraphQLID },
  name: { type: GraphQLString },
  address: { type: GraphQLString },
  phone: { type: GraphQLString },
  logo: { type: GraphQLString },
  stashID: {
    type: new GraphQLList(GraphQLString)!,
    resolve(parent, args) {
      return User.find({});
    }
  },
}

const companyMutation = {
  createCompany: {
    type: companyType,
    args: { ...companyFields },
    resolve(parent, args) {
      const newCompany = new Company({ id: uuidv1(), ...args });
      newCompany.save();
      return { status: `Company created ${new Date(Date.now())}` };
    }
  },
  updateCompany: {
    type: companyType,
    args: {
      id: { type: GraphQLID },
      name: { type: GraphQLString! },
      address: { type: GraphQLString! },
      phone: { type: GraphQLString! },
      logo: { type: GraphQLString! },
    },
    resolve(parent, args) {
      const { id, ...restArgs } = args;
      Company.findOneAndUpdate({ id }, { ...restArgs, status: `User updated ${new Date(Date.now())}` }).then(data => data);
      return { status: `Company created ${new Date(Date.now())}` };
    }
  },
  deleteCompany: {
    type: companyType,
    args: { id: { type: GraphQLID } },
    resolve(parent, args) {
      const { id } = args;
      Company.findOneAndDelete({ id }).then(data => data);
      return { status: `Company with ${id} deleted` }
    }
  }
}

const companyQuery = {
  findCompany: {
    type: companyType,
    args: { id: { type: GraphQLID } },
    resolve(parent, args) {
      return Company.findOne({ ...args });
    }
  },
}
export { companyFields, companyMutation, companyQuery };
