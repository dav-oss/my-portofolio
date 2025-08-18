import { Request, Response } from 'express';
import BlogPost from '../models/blogPost';

export class BlogController {
  // Create a new blog post
  async createPost(req: Request, res: Response) {
    try {
      const newPost = new BlogPost(req.body);
      await newPost.save();
      res.status(201).json(newPost);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      res.status(400).json({ message: errorMessage });
    }
  }

  // Get all blog posts
  async getAllPosts(req: Request, res: Response) {
    try {
      const posts = await BlogPost.find();
      res.status(200).json(posts);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      res.status(500).json({ message: errorMessage });
    }
  }

  // Get a single blog post by ID
  async getPostById(req: Request, res: Response) {
    try {
      const post = await BlogPost.findById(req.params.id);
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
      res.status(200).json(post);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      res.status(500).json({ message: errorMessage });
    }
  }

  // Update a blog post by ID
  async updatePost(req: Request, res: Response) {
    try {
      const updatedPost = await BlogPost.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedPost) {
        return res.status(404).json({ message: 'Post not found' });
      }
      res.status(200).json(updatedPost);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      res.status(400).json({ message: errorMessage });
    }
  }

  // Delete a blog post by ID
  async deletePost(req: Request, res: Response) {
    try {
      const deletedPost = await BlogPost.findByIdAndDelete(req.params.id);
      if (!deletedPost) {
        return res.status(404).json({ message: 'Post not found' });
      }
      res.status(204).send();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      res.status(500).json({ message: errorMessage });
    }
  }
}