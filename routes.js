import { Router } from 'express';
import { getPostById, getPosts } from './controllers/posts.js';

export const router = Router();

router.get('/posts', getPosts);
router.get('/posts/:id', getPostById);

router.use((_req, res) => {
  res.status(404).json({ error: 'Risorsa non trovata' });
});
