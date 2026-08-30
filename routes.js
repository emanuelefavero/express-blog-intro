import { Router } from 'express';
import { getPostById, getPosts } from './controllers/posts.js';

export const router = Router();

router.get('/', getPosts);
router.get('/:id', getPostById);

router.use((_req, res) => {
  res.status(404).json({ error: 'Risorsa non trovata' });
});
