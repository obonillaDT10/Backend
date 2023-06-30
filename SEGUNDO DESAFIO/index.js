
const fs = require("fs/promises");
const path = require("path");

class ProductManager {
  constructor(filePath) {
    this.filePath = filePath;
  }

    async getProductos() {
        try {
          const datos = await fs.readFile(this.filePath, "utf-8");
          const productos = JSON.parse(datos)
          if (productos.length > 0) {
            return productos;
          }
          return []; // Devuelve un arreglo vacío si no hay productos
        } catch (err) {
          console.log("Aquí está el error", err);
        }
      }

    async addProduct(producto) {
         try {
            const datos = await fs.readFile(this.filePath, "utf-8");
            const productos = JSON.parse(datos)
            let newProductId 
            if (productos[productos.length -1] && productos[productos.length - 1].id){
                   newProductId = productos[productos.length -1].id
            } else {
                newProductId = 0
            }

            productos.push({
             ...producto,
             id: newProductId + 1
            })

        await fs.writeFile(this.filePath, JSON.stringify(productos, null, 2))

        }
         catch (err) {
            console.log("ERROR POR ACA --> ", err);

         }
    }
    



}

const filePath = path.join(__dirname, "productos.json");
const productManager = new ProductManager(filePath);

async function main() {
    //traemos todos los productos, array vacío
   // console.log(await productManager.getProductos());


  //agrega los productos
//   await productManager.addProduct({
//     title: "Televisor", 
//     descripcion: "Pantalla plana",
//     price: 80000,
//     thumbnail: "http://imagen2",
//     code: "A1z",
//     stock: 10
//   })

  console.log(await productManager.getProductos());
}



main();


