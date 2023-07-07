const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('<p style="color:blue">Bienvenidos a mi server de express</p>')
})




const port = 3000
app.listen(port, () => {
    console.log(`Express Server listening at http://localhost:${port}`)
})