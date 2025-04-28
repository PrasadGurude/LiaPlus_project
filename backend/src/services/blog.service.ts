import blogModel, { IBlog } from '../models/blog.model';
import { BlogCreate, BlogUpdate } from '../interfaces/blog.interface';
import mongoose from 'mongoose';

// Get all blog posts
export const getBlogs = async (): Promise<IBlog[]> => {
  return await blogModel.find()
    .populate('author', 'name email')
    .sort({ createdAt: -1 });
};

// Get a single blog post by ID
export const getBlogById = async (id: string): Promise<IBlog | null> => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return null;
  }
  return await blogModel.findById(id)
    .populate('author', 'name email');
};

// Create a new blog post
export const createBlog = async (blogData: BlogCreate): Promise<IBlog> => {
  const blog = new blogModel({
    title: blogData.title,
    content: blogData.content,
    author: blogData.author
  });

  return await blog.save();
};

// Update an existing blog post
export const updateBlog = async (
  id: string, 
  blogData: BlogUpdate,
  userId: string
): Promise<IBlog | null> => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return null;
  }

  const blog = await blogModel.findById(id);
  if (!blog || !blog.author.equals(userId)) {
    return null;
  }

  return await blogModel.findByIdAndUpdate(
    id,
    { $set: blogData },
    { new: true }
  ).populate('author', 'name email');
};

// Delete a blog post
export const deleteBlog = async (id: string, userId: string): Promise<IBlog | null> => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return null;
  }

  const blog = await blogModel.findById(id);
  if (!blog || !blog.author.equals(userId)) {
    return null;
  }

  return await blogModel.findByIdAndDelete(id);
};