import { Document, Schema, Model, model } from 'mongoose';

export interface IUserModel extends Document {
  id: string,
  login: string,
  password: string,
  name: string,
  email: string,
  phone: string,
  commentsID: string[],
  availableGoodwill: number,
  availableHostility: number,
  companyID: string,
  status: string;
}

const UserSchema: Schema = new Schema({
  id: String,
  login: String,
  password: String,
  name: String,
  email: String,
  phone: String,
  commentsID: [String],
  availableGoodwill: Number,
  availableHostility: Number,
  companyID: String,
  status: String,
})

const User: Model<IUserModel> = model<IUserModel>(`User`, UserSchema);

export default User;
