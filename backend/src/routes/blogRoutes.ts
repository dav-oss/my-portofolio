import { Router } from 'express';
import { BlogController } from '../controllers/blogController';

const router = Router();
const blogController = new BlogController();

// Route to get all blog posts
router.get('/', blogController.getAllPosts.bind(blogController));

// Route to get a single blog post by ID
router.get('/:id', blogController.getPostById.bind(blogController));

// Route to create a new blog post
router.post('/', blogController.createPost.bind(blogController));

// Route to update a blog post by ID
router.put('/:id', blogController.updatePost.bind(blogController));

// Route to delete a blog post by ID
router.delete('/:id', blogController.deletePost.bind(blogController));

export default router;