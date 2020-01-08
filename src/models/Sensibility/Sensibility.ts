import { Document, Schema, Model, model } from 'mongoose';

export interface ISensibilityModel extends Document {
  availableGoodwill: number;
  availableHostility: number;
  commonGoodwill: number;
  commonHostility: number;
  commentsHistoryID: string[];
}

const SensibilitySchema: Schema = new Schema({
  availableGoodwill: Number,
  availableHostility: Number,
  commonGoodwill: Number,
  commonHostility: Number,
  commentsHistoryID: [String],
})

const Sensibility: Model<ISensibilityModel> = model<ISensibilityModel>(`Sensibility`, SensibilitySchema);

export default Sensibility;
