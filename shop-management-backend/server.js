// server.js
const app = require('./src/app');
require('./src/config/db'); // Connects to MongoDB

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
