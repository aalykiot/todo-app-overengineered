import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('NodeJS server is running!');
});

export default router;
