const express=require('express')
const ProductoRouter=express.Router();

const ControladorProducto = require('./../controladores/controladorProducto')

ProductoRouter.post('/new',ControladorProducto.insertarProducto);

module.exports=ProductoRouter;