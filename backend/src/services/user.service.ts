import bcrypt from 'bcryptjs';
import { RegisterInput } from '../schemas/user.schema';
import userModel, { IUser } from '../models/user.model';

export const createUser = async (userData: RegisterInput): Promise<IUser> => {
  // Hash the password before saving
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(userData.password, salt);

  // Create new user with hashed password
  const user = new userModel({
    name: userData.name,
    email: userData.email,
    password: hashedPassword,
    role: userData.role || 'user',
  });

  return await user.save();
};

//Validate user password and return user if valid
export const validatePassword = async (
  email: string,
  password: string
): Promise<IUser | null> => {
  // Find user by email
  const user = await userModel.findOne({ email });
  if (!user) {
    return null;
  }

  // Compare password
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return null;
  }

  return user;
};

// Find user by ID and exclude password from the result
export const findUserById = async (id: string): Promise<IUser | null> => {
  return await userModel.findById(id).select('-password');
};

export const updateProfile = async (
  userId: string,
  updateData: Partial<IUser>
): Promise<IUser | null> => {
  // If password is being updated, hash it
  if (updateData.password) {
    const salt = await bcrypt.genSalt(10);
    updateData.password = await bcrypt.hash(updateData.password, salt);
  }

  const user = await userModel.findByIdAndUpdate(
    userId,
    { $set: updateData },
    { new: true, runValidators: true }
  ).select('-password');

  return user;
};