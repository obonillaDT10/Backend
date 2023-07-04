const fs = require("fs/promises");
const path = require("path");//importo el modulo de fileSystemPath para pasar de una manera más facil la ruta donde voy a almacenar mis productos.
const filePath = path.join(__dirname, "productos.json");


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

            const existingProduct = productos.find((p) => p.code === producto.code);
            if (existingProduct) {
              console.log('Error: Ya existe un producto con el mismo código.');
              return;
            }

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
// console.log(await productManager.getProductos());


//agrega los productos
//     await productManager.addProduct({
//     title: "Televisor", 
//     descripcion: "Pantalla plana",
//     price: 80000,
//     thumbnail: "http://imagen1",
//     code: "A1z",
//     stock: 10
//   })

//   await productManager.addProduct({
//     title: "Aire Acondicionado", 
//     descripcion: "5000 frigorias",
//     price: 140000,
//     thumbnail: "http://imagen2",
//     code: "A1za",
//     stock: 10
//   })

//llamamos a los productos agregados
//console.log(await productManager.getProductos());

//Buscamos producto por id
//await productManager.getById(6)

//PROBAR MÉTODO updateProduct 
// await productManager.updateProduct(8, {
//     title: "NUEVO objeto de prueba", 
//     descripcion: "i-phone 15",
//     price: 81030,
//     thumbnail: "http://imagen2",
//     code: "A1z",
//     stock: 5
// })

//probando método Delete
//await productManager.deleteProduct(2)

}

main();


