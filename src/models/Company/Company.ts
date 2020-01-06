import { Document, Schema, Model, model } from 'mongoose';

export interface ICompanyModel extends Document {
  name: string,
  address: string,
  phone: string,
  stash: Array<{ id: string, hired: Date, fired: Date | null }>,
  logo: string,
}

const CompanySchema: Schema = new Schema({
  name: String,
  address: String,
  phone: String,
  stashID: Schema.Types.Mixed,
  logo: String,
})

const Company: Model<ICompanyModel> = model<ICompanyModel>(`Company`, CompanySchema)

export default Company;
