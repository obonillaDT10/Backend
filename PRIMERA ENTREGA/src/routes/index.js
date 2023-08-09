const {Router} = require("express")
const ProductRouter = require('./api/products.router')
const CartsRouter = require("./api/carts.router")
const HomeRouter = require("./home.router")

const router = Router()

router.use('/products', ProductRouter)
router.use('/carts', CartsRouter)
router.use('/', HomeRouter)

module.exports = {
  api:router
}
