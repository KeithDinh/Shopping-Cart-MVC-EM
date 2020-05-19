
const express = require('express');

const route = express.Router();
const shopController = require('../controllers/shop')


//If two middleware with same route, must have next() end of callback to allow the request to continue to the next middleware
route.get('/', shopController.getIndex);

route.get('/products', shopController.getProduct);

route.get('/cart', shopController.getCart);

route.get('/orders', shopController.getOrders);

route.get('/checkout', shopController.getCheckout);

module.exports = route;