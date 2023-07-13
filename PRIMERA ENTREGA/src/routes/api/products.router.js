const {Router} = require("express")
const ProductManager = require("../../managers/ProductManager")

const productManager = new ProductManager("productos.json");
const router = Router()

router.get("/", async(req, res) =>{
    const limit = req.query.limit
    const productos = await productManager.getProductos()
    if (limit){
        return res.send(productos.slice(0,limit))
    }

   return res.send(productos)
})

router.get("/:pid", async(req, res) =>{
    const id = req.params.id
    const producto = await productManager.getById(+id)

    if (producto){
        res.send(producto)
    }
    else (res.status(404).json({error: `El producto con el id ${id} no se encuentra. Intente de nuevo por favor.`}))
})

router.post("/", async(req, res) =>{
    const {body} = req
    const product = await productManager.addProduct(body)

    res.status(200).send(product)
})