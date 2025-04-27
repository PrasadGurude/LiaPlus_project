import jwt, { Secret, JwtPayload, SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IUserToken } from '../interfaces/user.interface';

dotenv.config();

const secret: Secret = process.env.JWT_SECRET || 'fallback-secret-key';
const expiresIn = process.env.JWT_EXPIRES_IN || '1h';

export const generateToken = (payload: IUserToken): string => {
  return jwt.sign(payload, secret, { expiresIn } as SignOptions);
};

export const verifyToken = (token: string): JwtPayload | string => {
  return jwt.verify(token, secret);
};