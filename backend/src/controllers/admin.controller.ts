import { Request, Response } from 'express';
import { createBlog, updateBlog, deleteBlog } from '../services/blog.service';
import { BlogCreate, BlogUpdate } from '../interfaces/blog.interface';
import mongoose from 'mongoose';
import blogModel from '../models/blog.model';

export const createBlogPost = async (req: Request, res: Response): Promise<void> => {
  try {
    const blogData: BlogCreate = {
      ...req.body,
      author: new mongoose.Types.ObjectId(req.user!.id)
    };

    const blog = await createBlog(blogData);
    res.status(201).json(blog);
  } catch (error: any) {
    res.status(500).json({ error: error.message, message: 'Error creating blog post' });
  }
};

export const updateBlogPost = async (req: Request, res: Response): Promise<void> => {
  try {
    const blog = await updateBlog(req.params.id, req.body as BlogUpdate, req.user!.id);
    if (!blog) {
      res.status(404).json({ message: 'Blog post not found or unauthorized' });
      return;
    }
    res.json(blog);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBlogPost = async (req: Request, res: Response): Promise<void> => {
  try {
    const blog = await deleteBlog(req.params.id, req.user!.id);
    if (!blog) {
      res.status(404).json({ message: 'Blog post not found or unauthorized' });
      return;
    }
    res.json({ message: 'Blog post deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

export const getBlogsByAuthor = async (req: Request, res: Response): Promise<void> => {
  try {
    const blogs = await blogModel.find({ author: req.user!.id });
    res.json(blogs);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
