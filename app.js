import path from 'node:path';
import express from 'express';
import { posts } from './data/posts.js';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.get('/', (_req, res) => res.send('Server del mio blog'));

app.get('/bacheca', (_req, res) => {
  res.json(posts);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
