// src/config/db.js
const mongoose = require('mongoose');

const mongoURI = 'mongodb://127.0.0.1:27017/shop_management'; // You can change 'shop_management' to any DB name

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(mongoURI, options)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;
