import path from 'node:path';
import express from 'express';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.get('/', (_req, res) => res.send('Server del mio blog'));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
