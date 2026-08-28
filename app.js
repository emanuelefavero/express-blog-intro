import path from 'node:path';
import express from 'express';
import { posts } from './data/posts.js';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.static('public'));

// TIP: Root route handled in public/index.html

app.get('/bacheca', (_req, res) => {
  res.json({ posts });
});

app.use((_req, res) => {
  res.status(404).json({ error: 'Risorsa non trovata' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
