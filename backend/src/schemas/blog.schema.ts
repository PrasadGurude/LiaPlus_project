import { z } from 'zod';

export const blogCreateSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  content: z.string().min(10, 'Content must be at least 10 characters'),
});

export const blogUpdateSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters').optional(),
  content: z.string().min(10, 'Content must be at least 10 characters').optional(),
});

export type BlogCreateInput = z.infer<typeof blogCreateSchema>;
export type BlogUpdateInput = z.infer<typeof blogUpdateSchema>;