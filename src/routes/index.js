const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
  res.send({ message: 'test server' });
});

router.post('/drop', (req, res) => {
  const { text } = req.body;
  if (!text || typeof text !== 'string') {
    return res.status(400).json({ error: 'Invalid request' });
  }
  console.log('Received:', text);
  res.json({ message: `Data received: ${text}` });
});

module.exports = router;
