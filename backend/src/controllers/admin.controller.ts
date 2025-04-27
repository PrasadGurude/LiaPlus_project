import { Request, Response } from 'express';
import { createBlog, updateBlog, deleteBlog } from '../services/blog.service';
import { BlogCreate, BlogUpdate } from '../interfaces/blog.interface';

export const createBlogPost = async (req: Request, res: Response): Promise<void> => {
  try {
    const blog = await createBlog({
      ...(req.body as BlogCreate),
      author: req.user!.id, // assuming req.user is correctly added by your authenticate middleware
    });
    res.status(201).json(blog);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBlogPost = async (req: Request, res: Response): Promise<void> => {
  try {
    const blog = await updateBlog(req.params.id, req.body as BlogUpdate);
    if (!blog) {
      res.status(404).json({ message: 'Blog post not found' });
      return;
    }
    res.json(blog);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBlogPost = async (req: Request, res: Response): Promise<void> => {
  try {
    const blog = await deleteBlog(req.params.id);
    if (!blog) {
      res.status(404).json({ message: 'Blog post not found' });
      return;
    }
    res.json({ message: 'Blog post deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
