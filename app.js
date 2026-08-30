import path from 'node:path';
import express from 'express';
import { router } from './routes.js';

const app = express();
const PORT = process.env.PORT ?? 3000;

// Static files
app.use(express.static(path.resolve('public')));

app.use('/bacheca', router);

// Client
const clientPath = path.resolve('client/dist');
const sendClient = (_req, res) => {
  res.sendFile(path.join(clientPath, 'index.html'));
};

app.use(express.static(clientPath));

// Catch-all route for client-side routing
app.get('/{*splat}', sendClient);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
