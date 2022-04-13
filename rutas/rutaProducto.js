const express=require('express')
const ProductoRouter=express.Router();

const ControladorProducto = require('./../controladores/controladorProducto')

ProductoRouter.post('/new',ControladorProducto.insertarProducto);
ProductoRouter.get('/look',ControladorProducto.obtenerProductos);
ProductoRouter.get('/:_id',ControladorProducto.obtenerProducto)

module.exports=ProductoRouter;