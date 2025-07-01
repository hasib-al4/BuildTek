const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Add CORS middleware to allow cross-origin requests
app.use(express.json());

// Register your routes
const shopRoutes = require('./routes/shopRoutes');
app.use('/api/shops', shopRoutes);

const tenantRoutes = require('./routes/tenantRoutes');
app.use('/api/tenants', tenantRoutes);

const paymentRoutes = require('./routes/paymentRoutes');
app.use('/api/payments', paymentRoutes);

// Optional test route
app.get('/test', (req, res) => {
  res.send('Test route working');
});

module.exports = app;
