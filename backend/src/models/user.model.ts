import mongoose, { Document, Schema } from 'mongoose';
import { UserRoles } from '../interfaces/user.interface';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: UserRoles;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: Object.values(UserRoles), default: UserRoles.USER },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>('User', userSchema);