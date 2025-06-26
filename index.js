require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/drop', (req, res) => {
  const { text } = req.body;

  if (!text || typeof text !== 'string') {
    return res.status(400).json({ error: 'Invalid request' });
  }

  console.log('Received:', text);

  res.json({
    message: `Data received: ${text}`
  });
});

app.get('/test', (req,res)=>{
    return res.send({
        message:"test server"
    })
})

// Start server
app.listen(PORT, () => {
  console.log(`Backend API running at http://localhost:${PORT}`);
});