const {Router} = require("express")
const ProductRouter = require('./api/products.router')
const CartsRouter = require("./api/carts.router")

const router = Router()

router.use('/products', ProductRouter)
router.use('/carts', CartsRouter)

module.exports = {
    api: router
 }