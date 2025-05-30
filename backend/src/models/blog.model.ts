import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './user.model';

export interface IBlog extends Document {
  _id: string;
  title: string;
  content: string;
  author: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const blogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IBlog>('Blog', blogSchema);