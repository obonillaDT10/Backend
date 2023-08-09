const ProductManager = require('../managers/ProductManager.js')
const CartManager = require('../managers/CartManager.js')
const productManager = new ProductManager('productos.json')
const cartManager = new CartManager('carrito.json')

function socketManager(socket) {
  console.log(`user has connected: ${socket.id}`)

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })


  socket.on('addToCart', async ({ userId, productId }) => {
    await cartManager.addProduct(userId, productId)
    const products = await cartManager.getProductsByUserId(userId)

    socket.emit('productsInCart', products)
  })
}

module.exports = socketManager