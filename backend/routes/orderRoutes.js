const express = require('express');
const { createOrder, processPayment } = require('../controllers/orderController');

const router = express.Router();

router.post('/', createOrder);
router.post('/pay', processPayment);

module.exports = router;
