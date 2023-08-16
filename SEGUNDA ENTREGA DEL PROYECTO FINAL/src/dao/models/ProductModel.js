const { Schema, model } = require('mongoose');

const schema = new Schema({
    title: {type: String, index: true},
    description: String,
    price: Number,
    thumbnails: [String],
    code: String,
    stock: Number,
}, { timestamps: true });

const productModel = model('products', schema)

module.exports=productModel;