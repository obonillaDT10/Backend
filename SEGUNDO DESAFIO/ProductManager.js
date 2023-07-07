const fs = require('fs/promises')
const path = require('path')

class ProductManager {

    constructor(filename) {
        this.filename = filename
        this.filepath = path.join(__dirname, this.filename)
        this.products = []
    }
}