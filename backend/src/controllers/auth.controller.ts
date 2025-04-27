import { NextFunction, Request, Response } from 'express';
import { generateToken } from '../config/jwt';
import { validatePassword, createUser } from '../services/user.service';
import { loginSchema, RegisterInput } from '../schemas/user.schema';
import { UserRoles } from '../interfaces/user.interface';

// Register route handler
export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const user = await createUser(req.body);
    const token = generateToken({ id: user._id.toString(), role: user.role as UserRoles });
    res.status(201).json({ token });
  } catch (error: any) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    res.status(500).json({ message: error.message });
  }
};

// Login route handler
export const login = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { email, password } = loginSchema.parse(req.body);
    const user = await validatePassword(email, password);

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = generateToken({ id: user._id.toString(), role: user.role as UserRoles });
    res.json({ token });
  } catch (error: any) {
    res.status(400).json({ message: error.errors || error.message });
  }
};

// Get current user route handler
export const getMe = async (req: Request, res: Response): Promise<any> => {
  res.json(req.user); // No need to return anything explicitly, just send the response.
};
