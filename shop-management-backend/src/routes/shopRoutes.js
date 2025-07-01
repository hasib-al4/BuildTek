const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shopController');

// GET /api/shops
router.get('/', shopController.getAllShops);

// POST /api/shops
router.post('/', shopController.createShop);

module.exports = router;
