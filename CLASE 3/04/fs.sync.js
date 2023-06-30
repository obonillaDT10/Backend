const fs = require('fs')
const path = require('path')
const filename = 'data.txt'
const filepath = path.join(__dirname, filename)

console.log(filepath)

fs.writeFile(filepath, "datadatadata", (err) => {
    if (err) {
        console.log("no se pudo abrir el archivo")
    } else {
        fs.appendFile(filepath, "n/nMASDATA")
    }  
})