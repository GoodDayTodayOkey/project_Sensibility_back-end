import { Document, Schema, Model, model } from 'mongoose';

export interface ICommentModel extends Document {
  message: string,
  authorID: string,
  companyLogo: string,
  time: Date;
  isShowed: boolean,
}

const CommentSchema: Schema = new Schema({
  message: String,
  authorID: String,
  companyLogo: String,
  time: Date,
  isShowed: Boolean,
})

const Comment: Model<ICommentModel> = model<ICommentModel>(`Comment`, CommentSchema)

export default Comment;