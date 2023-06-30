//1) Se define una clase llamada ProductManager, que actúa como el administrador de productos. Tiene dos propiedades: products, que es un arreglo vacío donde se almacenarán los productos, y lastProductId, que es un contador para llevar un registro del último ID asignado a un producto.

//2) Se define un método constructor dentro de la clase ProductManager. Este método se ejecuta automáticamente cuando se crea una nueva instancia de la clase ProductManager y se inicializan las propiedades products y lastProductId.

class ProductManager {
    constructor() {
      this.products = [];
      this.lastProductId = 0;
    }
  
//3) Se define un método llamado addProduct en la clase ProductManager. Este método recibe un objeto product como argumento, que representa la información de un nuevo producto a agregar.

//4) Dentro del método addProduct, se realiza una validación para asegurarse de que todos los campos obligatorios del objeto product estén presentes (es decir, title, description, price, thumbnail, code y stock). Si alguno de los campos obligatorios falta, se muestra un mensaje de error en la consola y se devuelve la ejecución del método.

    addProduct(product) {
      if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
        console.log('Error: Todos los campos son obligatorios.');
        return;
      }
  
//5) Luego, se verifica si ya existe un producto con el mismo código en la lista de productos existentes (this.products). Si se encuentra un producto con el mismo código, se muestra un mensaje de error en la consola y se devuelve la ejecución del método.

      const existingProduct = this.products.find((p) => p.code === product.code);
      if (existingProduct) {
        console.log('Error: Ya existe un producto con el mismo código.');
        return;
      }
  
     //6) Si pasa las validaciones anteriores, se genera un nuevo ID para el producto sumando 1 al valor de lastProductId y se actualiza el valor de lastProductId con el nuevo ID.

      const newProductId = this.lastProductId + 1;
      this.lastProductId = newProductId;
  
  //7) A continuación, se crea un nuevo objeto newProduct con los campos id, title, description, price, thumbnail, code y stock del producto proporcionado. Luego, se agrega este nuevo producto al arreglo this.products utilizando el método push().
      
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

  //8) Por último, se muestra un mensaje en la consola indicando que el producto se ha agregado correctamente.
  
      console.log('Producto agregado correctamente.');
    }


  //*getProducts(): Este es un método definido en la clase ProductManager. Su objetivo es devolver la lista de productos almacenados en la propiedad products. Simplemente retorna el arreglo this.products, lo cual permite acceder a todos los productos agregados hasta el momento. En el código proporcionado, se utiliza para asignar el resultado de productManager.getProducts() a la variable allProducts, y luego se muestra allProducts en la consola.

    getProducts() {
      return this.products;
    }
  
    //*getProductById(id): Este método también está definido en la clase ProductManager. Recibe un parámetro id, que representa el ID del producto que se desea obtener. El método busca en la lista de productos (this.products) utilizando el método find(), que itera sobre cada elemento del arreglo y retorna el primer elemento que cumpla con la condición especificada. En este caso, se busca un producto cuyo id coincida con el valor proporcionado. Si se encuentra el producto, se devuelve el objeto del producto. En caso contrario, se muestra un mensaje de error en la consola indicando que el producto no se encontró. En el código proporcionado, se utiliza para obtener un producto específico por su ID al llamar a productManager.getProductById(productId) y asignar el resultado a la variable productById, que luego se muestra en la consola.

    getProductById(id) {
      const product = this.products.find((producto) => producto.id === id);
      if (product) {
        return product;
      } else {
        console.log('Error: Producto no encontrado.');
      }
    }
  }

  //*Estos dos métodos complementan las funcionalidades del administrador de productos, permitiendo obtener la lista completa de productos y buscar productos individuales por su ID.

  //9) Después de la definición de la clase ProductManager, se crea una instancia de la misma llamada productManager.

  const productManager = new ProductManager();

  //10) Se llama al método addProduct() dos veces en productManager, pasando como argumento objetos que representan productos con información específica.

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


//11) Se llama al método getProducts() en productManager para obtener todos los productos agregados hasta el momento. El resultado se asigna a la variable allProducts.

const allProducts = productManager.getProducts();

//12) Finalmente, se muestra en la consola el contenido de allProducts.

console.log(allProducts);

//13) Se define una variable productId con valor 1 y se llama al método getProductById() en productManager, pasando productId como argumento. El resultado se asigna a la variable productById.

const productId = 1;
const productById = productManager.getProductById(productId);

//14) Por último, se muestra en la consola el mensaje "El producto es: " seguido del contenido de productById.

console.log('El producto es: ', productById);