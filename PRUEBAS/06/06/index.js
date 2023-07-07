const http = require('http')

const server = http.createServer((req, res) => {
console.log('aqui hay una peticion nueva')

res.statusCode = 200

res.end('Hola Omar Alejandro')
})


server.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})