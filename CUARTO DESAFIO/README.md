# Proyecto de Configuración con Handlebars y WebSockets

Este es un proyecto para configurar un servidor Node.js con el motor de plantillas Handlebars y la implementación de WebSockets utilizando Socket.IO. El objetivo del proyecto es mostrar una lista de productos en dos vistas diferentes: una vista "home" que utiliza Handlebars y otra vista "realTimeProducts" que funciona con WebSockets para actualizarse en tiempo real.

## Instalación

Para comenzar a trabajar con este proyecto, sigue estos pasos:

1. Clona este repositorio en tu máquina local:
   git clone https://github.com/Mayra-Riccardi/websocket


2. Instala las dependencias necesarias utilizando npm:
   npm install


## Configuración del Servidor

El servidor está configurado para utilizar el motor de plantillas Handlebars y también se ha integrado Socket.IO para trabajar con WebSockets.

## Vistas

### Home
La vista "home.handlebars" muestra una lista de todos los productos agregados hasta el momento. Los datos se renderizan utilizando Handlebars para generar la lista de productos.

### Real Time Products
La vista "realTimeProducts.handlebars" vive en el endpoint "/realtimeproducts" en nuestro views router. Al utilizar WebSockets, cada vez que se crea o elimina un producto, la lista se actualizará automáticamente en esta vista, reflejando los cambios en tiempo real sin necesidad de recargar la página.

## Otras Rutas y Endpoints

Además de las vistas mencionadas, puedes probar las siguientes rutas utilizando Postman:
1. **Obtener todos los productos:** 
   - Método: GET
   - Endpoint: http://localhost:8080/api/products
   - Devuelve una lista de todos los productos disponibles.

2. **Obtener un producto específico:** 
   - Método: GET
   - Endpoint: http://localhost:8080/api/products/:id
   - Reemplaza `:id` con el ID del producto que deseas obtener.
   - Devuelve la información detallada de un producto específico.

3. **Crear un nuevo producto:** 
   - Método: POST
   - Endpoint: http://localhost:8080/api/products
   - Envía los datos del nuevo producto en formato JSON en el cuerpo de la solicitud.

  ```json
         {
           "title": "Producto de Prueba",
           "descripcion": "Acción y aventuras desarrollado por SCEA y distribuido por Sony para la consola PS 2. Es el primer juego en estrenarse.",
           "price": 40000,
           "thumbnail": "https://img.asmedia.epimg.net/resizer/X823qqfniPDSUXY9lR7Qnle195U=/360x203/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/XPOFAWR6AZICLFIL7ZO3EGXTHE.jpg",
           "code": "prueba",
           "stock": 15
          }
   ```

4. **Actualizar un producto existente:** 
   - Método: PUT
   - Endpoint: http://localhost:8080/api/products/:pid
   - Reemplaza `:id` con el ID del producto que deseas actualizar.
   - Envía los datos actualizados del producto en formato JSON en el cuerpo de la solicitud.

5. **Eliminar un producto:** 
   - Método: DELETE
   - Endpoint: http://localhost:8080/api/products/:pid
   - Reemplaza `:id` con el ID del producto que deseas eliminar.

6. **Obtener un carrito de compra específico:** 
   - Método: GET
   - Endpoint: http://localhost:8080/api/carts/:cid
   - Reemplaza `:id` con el ID del carrito de compra que deseas obtener.

9. **Crear un nuevo carrito de compra:** 
   - Método: POST
   - Endpoint: http://localhost:8080/api/carts
   - Envía los datos del nuevo carrito de compra en formato JSON en el cuerpo de la solicitud.


10. **Agregar productos al carrito de compras:** 
   - Método: POST
   - Endpoint: http://localhost:8080/api/carts/:cid/products/pid
   - Reemplaza `:id` con el ID del carrito y del producto de compra que deseas agregar.

## Uso
Para ejecutar el proyecto, utiliza el siguiente comando:
   npm start


Luego, abre tu navegador y accede a `http://localhost:8080` para ver la vista "home" con la lista de productos. Para ver la vista "realTimeProducts" con la actualización en tiempo real, accede a `http://localhost:8080/realtimeproducts`.

Recuerdá que al utilizar WebSockets, la vista "realTimeProducts" se actualizará automáticamente cada vez que se agregue o elimine un producto.

## Contribuciones
Si deseas contribuir a este proyecto, siéntete libre de hacer un pull request. ¡Toda ayuda es bienvenida!



¡Espero que este proyecto te sea útil!








