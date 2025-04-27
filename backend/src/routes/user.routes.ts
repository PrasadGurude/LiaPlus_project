import { Router } from 'express';
import { getBlogPost, getBlogPosts } from '../controllers/user.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.use(authenticate);

router.get('/blogs', getBlogPosts);
router.get('/blogs/:id', getBlogPost);

export default router;