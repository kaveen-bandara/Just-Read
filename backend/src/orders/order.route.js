const express = require('express');
const {makeAnOrder, getOrderByEmail} = require('./order.controller');
const router = express.Router();

// post an order
router.post('/', makeAnOrder);

// get orders by email 
router.get('/:email', getOrderByEmail);

module.exports = router;