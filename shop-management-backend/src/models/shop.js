const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
  name: { type: String, required: true },
  floor: { type: String, required: true },
  size: { type: String, required: true },
  rentAmount: { type: Number, required: true },
  status: { type: String, enum: ['occupied', 'vacant'], default: 'vacant' },
  documents: [{ type: String }], // URLs or filenames
});

module.exports = mongoose.model('Shop', shopSchema);
