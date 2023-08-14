const express = require("express")
const app = express()
const ProductManager = require('./ProductManager');



const productManager = new ProductManager("productos.json");

//Definir endpoints
app.get("/", async(req, res) =>{
    res.send("<h1>MI SERVIDOR EXPRESS</h1>")
})


app.get("/products", async(req, res) =>{
    const limit = req.query.limit
    const productos = await productManager.getProductos()
    if (limit){
        return res.send(productos.slice(0,limit))
    }

   return res.send(productos)
})

app.get("/products/:id", async(req, res) =>{
    const id = req.params.id
    const producto = await productManager.getById(+id)

    if (producto){
        res.send(producto)
    }
    else (res.status(404).json({error: `El producto con el id ${id} no se encuentra. Intente de nuevo por favor.`}))
})


const port = 8080
app.listen(port, () => {
    console.log(`Express Server listening at http://localhost:${port}`)
})


