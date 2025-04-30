import { Router } from 'express';
import { getBlogPosts, getBlogPost, updateUserProfile } from '../controllers/user.controller';
import { authenticate } from '../middlewares/auth.middleware';


const router = Router();

router.use(authenticate); 

// Blog routes
router.get('/blogs', getBlogPosts);
router.get('/blogs/:id', getBlogPost);

// Profile routes
router.put('/profile', updateUserProfile);

export default router;