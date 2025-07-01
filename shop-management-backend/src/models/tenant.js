const mongoose = require('mongoose');

const tenantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String },
  shop: { type: mongoose.Schema.Types.ObjectId, ref: 'Shop', required: true },
  leaseStart: { type: Date, required: true },
  leaseEnd: { type: Date, required: true },
  documents: [{ type: String }]
});

module.exports = mongoose.model('Tenant', tenantSchema);
