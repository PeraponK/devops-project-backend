require('dotenv').config();
const app = require('./src/app');

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Backend API running at http://localhost:${PORT}`);
});
