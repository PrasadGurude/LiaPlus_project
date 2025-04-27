import { Request, Response, NextFunction } from 'express';
import { getBlogs, getBlogById } from '../services/blog.service';

const getBlogPosts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const blogs = await getBlogs();
    res.json(blogs);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const getBlogPost = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const blog = await getBlogById(req.params.id);
    if (!blog) {
      res.status(404).json({ message: 'Blog post not found' });
      return;
    }
    res.json(blog);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export { getBlogPosts, getBlogPost };