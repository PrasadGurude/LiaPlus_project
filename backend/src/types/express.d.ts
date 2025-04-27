// src/types/express.d.ts
import { IUserToken } from '../interfaces/user.interface'; // Adjust the import path if necessary

declare global {
  namespace Express {
    interface Request {
      user?: IUserToken;
    }
  }
}
