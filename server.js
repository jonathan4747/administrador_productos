const express = require('express');
const cors = require('cors');
require('./config/config')

const app = express();
const ProductoRouter = require('./rutas/rutaProducto');
app.use(cors());
app.use(express.json() );
app.use('/api/producto',ProductoRouter);

app.listen(8080,()=>{
    console.log("el servidor se encuentra corriendo en el puerto 8080")
})