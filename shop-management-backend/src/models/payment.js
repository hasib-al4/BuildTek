const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  tenant: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true },
  shop: { type: mongoose.Schema.Types.ObjectId, ref: 'Shop', required: true },
  amount: { type: Number, required: true },
  mode: { type: String, enum: ['cash', 'gpay'], required: true },
  date: { type: Date, default: Date.now },
  invoice: { type: String },
  status: { type: String, enum: ['paid', 'pending'], default: 'paid' }
});

module.exports = mongoose.model('Payment', paymentSchema);
