import { IUser } from '../models/user.model';

export interface BlogCreate {
  title: string;
  content: string;
  author: IUser['_id'];
}

export interface BlogUpdate {
  title?: string;
  content?: string;
}