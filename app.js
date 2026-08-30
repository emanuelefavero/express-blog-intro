import path from 'node:path';
import express from 'express';
import { router } from './routes.js';

const app = express();
const PORT = process.env.PORT ?? 3000;

// Middlewares
app.use(express.json());

const logger = (req, _res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
app.use(logger);

// API
app.use('/api', router);

// Static files
app.use('/images', express.static(path.resolve('public/images')));

// Client
const clientPath = path.resolve('client/dist');
app.use(express.static(clientPath));

// Catch-all route for client-side routing
app.get('/{*splat}', (_req, res) => {
  res.sendFile(path.join(clientPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
