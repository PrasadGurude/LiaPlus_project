// src/types/express.d.ts
import { IUserToken } from '../interfaces/user.interface'; 

declare global {
  namespace Express {
    interface Request {
      user?: IUserToken;
    }
  }
}
