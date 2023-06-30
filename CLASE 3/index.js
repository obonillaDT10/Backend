class ProductManager {
    constructor() {
      this.products = [];
      this.lastProductId = 0;
    }
  
    addProduct(product) {
     
      if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
        console.log('Error: Todos los campos son obligatorios.');
        return;
      }
  
   
      const existingProduct = this.products.find((p) => p.code === product.code);
      if (existingProduct) {
        console.log('Error: Ya existe un producto con el mismo código.');
        return;
      }
  
     
      const newProductId = this.lastProductId + 1;
      this.lastProductId = newProductId;
  
      
      const newProduct = {
        id: newProductId,
        title: product.title,
        description: product.description,
        price: product.price,
        thumbnail: product.thumbnail,
        code: product.code,
        stock: product.stock,
      };
      this.products.push(newProduct);
  
      console.log('Producto agregado correctamente.');
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((producto) => producto.id === id);
      if (product) {
        return product;
      } else {
        console.log('Error: Producto no encontrado.');
      }
    }
  }

  const productManager = new ProductManager();


productManager.addProduct({
  title: 'Tv',
  description: '25 pulgadas',
  price: 1000,
  thumbnail: './imagen1.jpg',
  code: 'c1',
  stock: 100,
});

productManager.addProduct({
  title: 'monitor',
  description: '17 pulgadas',
  price: 2000,
  thumbnail: './imagen2.jpg',
  code: 'c16',
  stock: 50,
});


const allProducts = productManager.getProducts();
console.log(allProducts);


const productId = 1;
const productById = productManager.getProductById(productId);
console.log('El producto es: ', productById);