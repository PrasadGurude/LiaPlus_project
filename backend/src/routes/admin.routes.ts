import { Router } from 'express';
import {
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
  getBlogsByAuthor,
} from '../controllers/admin.controller';
import { authenticate } from '../middlewares/auth.middleware';
import { authorize } from '../middlewares/role.middleware';
import { UserRoles } from '../interfaces/user.interface';

const router = Router();

router.use(authenticate);
router.use(authorize([UserRoles.ADMIN]));

router.post('/blogs', createBlogPost);
router.get('/blogs',getBlogsByAuthor );
router.put('/blogs/:id', updateBlogPost);
router.delete('/blogs/:id', deleteBlogPost);

export default router;