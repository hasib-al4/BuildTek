const Tenant = require('../models/tenant');

// Get all tenants
exports.getAllTenants = async (req, res) => {
  try {
    const tenants = await Tenant.find().populate('shop');
    res.json(tenants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a new tenant
exports.createTenant = async (req, res) => {
  try {
    const tenant = new Tenant(req.body);
    await tenant.save();
    res.status(201).json(tenant);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
