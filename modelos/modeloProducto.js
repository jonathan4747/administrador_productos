const mongoose = require ('mongoose');

let counter = 1;
let CountedId = {type: Number, default: () => counter++};
const SchemaProducto = new mongoose.Schema({
    id:CountedId,
    titulo:String,
    precio: Number,
    descripcion:String
})

const Producto = mongoose.model('productos',SchemaProducto);
module.exports=Producto;