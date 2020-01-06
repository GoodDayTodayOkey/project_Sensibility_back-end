import { Document, Schema, Model, model } from 'mongoose';

export interface IUserModel extends Document {
  name: string,
  email: string,
  phone: string,
  commentsID: string[],
  availableGoodwill: number,
  availableHostility: number,
  companyID: string,
}

const UserSchema: Schema = new Schema({
  name: String,
  email: String,
  phone: String,
  commentsID: [String],
  availableGoodwill: Number,
  availableHostility: Number,
  companyID: String,
})

const User: Model<IUserModel> = model<IUserModel>(`User`, UserSchema)

export default User;
