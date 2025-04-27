import { Request, Response, NextFunction } from 'express';
import { UserRoles } from '../interfaces/user.interface';

export const authorize = (roles: UserRoles[]) :any => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!roles.includes(req.user!.role)) {
      return res.status(403).json({ message: 'Forbidden - Insufficient permissions' });
    }
    next();
  };
};