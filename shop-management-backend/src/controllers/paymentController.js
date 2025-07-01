const Payment = require('../models/payment');

exports.getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find().populate('tenant shop');
    res.json(payments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createPayment = async (req, res) => {
  try {
    const payment = new Payment(req.body);
    await payment.save();
    res.status(201).json(payment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
