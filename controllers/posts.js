import { posts } from '../data/posts.js';

export const getPosts = (_req, res) => {
  res.json({ posts });
};

export const getPostById = (req, res) => {
  const postId = Number(req.params.id);
  const post = posts.find((p) => p.id === postId);

  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ error: 'Post non trovato' });
  }
};
