const express = require("express")
const { api } = require('./routes');
const app = express()


//MIDDLEWARES
app.use(express.urlencoded({
    extend: true
}))

app.use(express.json())
app.use(express.static("public"))

app.use("/api", api)

//SERVIDOR
const port = 8080

app.listen(port, () => {
    console.log(`🚀 Server is up and running on port ${port} 🚀`)
})