const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shopController');

// GET /api/shops
router.get('/', shopController.getAllShops);

// POST /api/shops
router.post('/', shopController.createShop);

// DELETE /api/shops/:id
router.delete('/:id', async (req, res) => {
  try {
    await shopController.deleteShop(req, res);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
