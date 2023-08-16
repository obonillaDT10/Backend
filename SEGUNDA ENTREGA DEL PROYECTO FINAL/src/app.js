(async () => {
    const express = require("express");
    const { api } = require('./routes');
    const http = require('http')
    const path = require('path');
    const handlebars = require('express-handlebars')
    const { Server } = require("socket.io");
    const socketManager = require('./websocket')
    const mongoose = require('mongoose')

    try {
        // Conectar la base de datos antes de levantar el servidor
        await mongoose.connect("mongodb+srv://obapp:OmarDt10@cluster0.b2r1doq.mongodb.net/?retryWrites=true&w=majority");

        const app = express();
        const server = http.createServer(app);
        const io = new Server(server);

        // Agregar el middleware para 'req.io' esté disponible
    app.use((req, res, next) => {
        req.io = io;
       next();
  });

        // Configuración de handlebars:
        app.engine('handlebars', handlebars.engine);
        app.set('views', path.join(__dirname, '/views'));
        app.set('view engine', 'handlebars');

        // Middlewares
        app.use(express.json());
        app.use('/static', express.static(path.join(__dirname + '/public')));

        app.use("/", api);

        // Web socket
        io.on('connection', socketManager);

        // Servidor
        const port = 8080;//definimos puerto

        server.listen(port, () => {
            console.log(`🚀 Server is up and running on port ${port} 🚀`);//levantamos servidor
        });

        console.log('POR FIN TE CONECTASTE A LA BDD');
    } catch (error) {
        console.log('No te conectaste pero este console sirve', error);
    }
})();
