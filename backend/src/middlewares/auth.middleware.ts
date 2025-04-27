import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../config/jwt';
import { IUserToken } from '../interfaces/user.interface';

export const authenticate = (req: Request, res: Response, next: NextFunction):void=> {
  const token = req.headers['authorization']?.split(' ')[1]; // Bearer <token>
  if (!token) {
    res.status(401).json({
      error: "User must sign in",
    });
  }

  try {
    const decoded = verifyToken(token!) as IUserToken;
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};