//estamos aprendiendo a manejar archivos con node- Node es el entorno de ejecucion que interpreta lenguaje javascript. Node tiene dentro
// de su "codigo interno" modulos que estan disponibles para usar, lo unico que hay que hacer para usarlo es importarlos una vez que 
// estan importados, listo ya se pueden usar. En este caso 
//vamos a usar el modulo de file system, abreviado fs y los metodos que incluye son read file, write file, entre otros.

const moment = require('moment')
const fs = require("fs/promises");
const path = require("path");//importo el modulo de fileSystemPath para pasar de una manera más facil la ruta donde voy a almacenar mis productos.
const filePath = path.join(__dirname, "productos.json");

//clase = molde. Cada clase necesita la función constructor con la que se van a crear los objetos. En este caso la clase es ProductManager
//y la función es "constructor".
//filePath es la ruta entera almacenada en una palabra. 
//Constructor va a almacenar todo en filePath.
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
          return []; // Devuelve un array vacío si no hay productos
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

            //stringify es un traductor de lenguajes. 
            //Json Stringify se usa para traducir de lenguaje javaScrypt a lenguaje Json
            //Json.parse: Traductor de Json a JavaScrypt. Los dos traductores son exlusivos para la funcion que traducen. 
            //Es decir, Json Stringify es explsivo de JavaScrypt a Json y Json Parse explusivo de Json a JavaScrypt. 
        await fs.writeFile(this.filePath, JSON.stringify(productos, null, 2))

        }
         catch (err) {
            console.log("ERROR POR ACA --> ", err);

         }
    }

    async getById(id) {
        try { 
            const datos = await fs.readFile(this.filePath, "utf-8");
            const productos = JSON.parse(datos)
            const productoEncontrado = productos.find(producto => producto.id === id);

            if (productoEncontrado) {
                console.log(productoEncontrado);
            } else {
                console.log("Producto no encontrado");
            }


        }
        catch (err) {
            console.log("MIRAME ESTE NUEVO ERROR POR ACÁ", err);

        }
    }

    async updateProduct(id, producto) {
        try {
            const datos = await fs.readFile(this.filePath, "utf-8");
            const productos = JSON.parse(datos)
            const productoEncontrado = productos.find(producto => producto.id === id);

            if (productoEncontrado) {
                productoEncontrado.title = producto.title || productoEncontrado.title;
                productoEncontrado.descripcion = producto.descripcion || productoEncontrado.descripcion;
                productoEncontrado.price = producto.price || productoEncontrado.price
                productoEncontrado.thumbnail = producto.thumbnail || productoEncontrado.thumbnail
                productoEncontrado.code = producto.code || productoEncontrado.code
                productoEncontrado.stock = producto.stock || productoEncontrado.stock

                console.log("Producto actualizado:", productoEncontrado);
                await fs.writeFile(this.filePath, JSON.stringify(productos, null, 2))
                
                
            } else {
                console.log("Producto no encontrado");
            }


        }

        catch (err) {
            console.log("ATENTO AL ERROR ACÁ", err);
        }
    }

    async deleteProduct(id) {
        try {
            const datos = await fs.readFile(this.filePath, "utf-8");
            const productos = JSON.parse(datos)
            const productoIndex = productos.findIndex(producto => producto.id === id);

            if (productoIndex !== -1) {
                productos.splice(productoIndex, 1);
                console.log("Producto eliminado");
    
                await fs.writeFile(this.filePath, JSON.stringify(productos, null, 2))
            } else {
                console.log("Producto no encontrado");
        }
    }
        catch (err) {
            console.log("nuevo error", err);

        }
    }


}

const productManager = new ProductManager(filePath);

async function main() {
    //traemos todos los productos, array vacío
   //console.log(await productManager.getProductos());


//agrega los productos
//     await productManager.addProduct({
//     title: "Televisor", 
//     descripcion: "Pantalla plana",
//     price: 80000,
//     thumbnail: "http://imagen2",
//     code: "A1z",
//     stock: 10
//   })

//llamamos a los productos agregados
// console.log(await productManager.getProductos());

// await productManager.getById(1)

//PROBAR MÉTODO updateProduct 
// await productManager.updateProduct(1, {
//     title: "NUEVO objeto de prueba", 
//     descripcion: "i-phone 15",
//     price: 81030,
//     thumbnail: "http://imagen2",
//     code: "A1z",
//     stock: 5
// })

//probando método Delete
await productManager.deleteProduct(1)

}





main();


console.log(moment)


