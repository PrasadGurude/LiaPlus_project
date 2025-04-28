import mongoose from 'mongoose';

export interface BlogCreate {
  title: string;
  content: string;
  author: mongoose.Types.ObjectId;
}

export interface BlogUpdate {
  title?: string;
  content?: string;
}