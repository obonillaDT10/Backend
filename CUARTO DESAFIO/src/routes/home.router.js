// routes/mainRouter.js
const express = require('express');
const router = express.Router();
const path = require('path')
const filePath = path.join(__dirname, "..", "data", "products.json");

const ProductManager = require('../managers/ProductManager')
const productManager = new ProductManager(filePath)

router.get('/', async (req, res) => {
  const products = await productManager.getProductos()
  res.render('home', {
   title: 'Vista de productos Home',
   products
   }) // Renderiza
});


module.exports = router;
