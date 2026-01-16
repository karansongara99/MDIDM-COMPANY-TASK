const express = require('express');
const { createProduct, getProducts, getProductById, updateProduct, deleteProduct } = require('../controller/productcontoller');
const protect = require('../middleware/authmiddlware');
const router = express.Router();

router.post('/', protect, createProduct);
router.get('/', protect, getProducts);
router.get('/:id', protect, getProductById);
router.put('/:id', protect, updateProduct);
router.delete('/:id', protect, deleteProduct);

module.exports = router;