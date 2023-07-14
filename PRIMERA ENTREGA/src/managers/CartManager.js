const fs = require("fs");
const path = require("path");

const ProductManager = require("./ProductManager")

class CartsManager {
  constructor(filename) {
    this.filename = filename;
    this.filepath = this.filename
    this.carts = [];
    this.productManager = new ProductManager(path.join(__dirname, "../data/products.json"));
  }

  async getCarts() {
    try {
      const datos = await fs.promises.readFile(this.filepath, "utf-8");
      const carts = JSON.parse(datos);
      return carts;
    } catch (err) {
      console.log("Aquí está el error", err);
      return []; // Devuelve un array vacío si hay un error en la lectura del archivo
    }
  }

  async addCart() {
    const carts = await this.getCarts();

    let id = 1;
    if (carts.length > 0) {
      id = carts[carts.length - 1].id + 1;
    }

    const nuevoCarrito = {
      id: id,
      products: [],
    };

    carts.push(nuevoCarrito);

    try {
      await fs.promises.writeFile(
        this.filepath,
        JSON.stringify(carts, null, 2)
      );
      return nuevoCarrito;
    } catch (err) {
      console.log("Error al guardar el carrito", err);
      return null;
    }
  }

  async getCartById(id) {
    try {
      const data = await fs.promises.readFile(this.filepath, "utf-8");
      const carts = JSON.parse(data);
      const cartFound = carts.find((cart) => cart.id === +id);
  
      if (cartFound) {
        return cartFound;
      } else {
        return null;
      }
    } catch (error) {
      console.log("Error al leer el archivo de carritos:", error);
      return null;
    }
  }
  

  async addProductToCart(cid, pid) {
    try {
      // Verificar si el carrito existe
      let cartById = await this.getCartById(+cid);
      
      if (!cartById) {
        return "Carrito no encontrado";
      }

      // Verificar si el producto existe en products.json
      let productById = await this.productManager.getById(+pid);
      if (!productById) {
        return "Producto no encontrado";
      }

      // Buscar el índice del producto en el carrito
      const index = cartById.products.findIndex((prod) => prod.id === +pid);

      if (index !== -1) {
        // El producto ya existe en el carrito, se incrementa la cantidad
        cartById.products[index].cantidad++;
      } else {
        // El producto no existe en el carrito, se agrega con cantidad 1
        cartById.products.push({ id: productById.id, cantidad: 1 });
      }

      // Actualizar el archivo carts.json con el carrito modificado
      const cartAll = await this.getCarts();
      const updatedCarts = cartAll.map((cart) => {
        if (cart.id === +cid) {
          return cartById;
        }
        return cart;
      });
      await fs.promises.writeFile(
        this.filepath,
        JSON.stringify(updatedCarts, null, 2)
      );

      return "Producto Agregado al Carrito";
    } catch (error) {
      console.error("Error al agregar el producto al carrito:", error);
      return "Ha ocurrido un error al agregar el producto al carrito";
    }
  }

  async deleteCart(id) {
    try {
      const data = await fs.promises.readFile(this.filepath, "utf-8");
      const carts = JSON.parse(data);
  
      const cartFound = carts.findIndex((cart) => cart.id === +id);
  
      if (cartFound !== -1) {
        carts.splice(cartFound, 1);
  
        await fs.promises.writeFile(this.filepath, JSON.stringify(carts, null, 2));
      } else {
        console.log(`Cart with ${id} not found`);
      }
    } catch (error) {
      console.log("Error al leer o escribir el archivo de carritos:", error);
    }
  }
  
}

module.exports = CartsManager
