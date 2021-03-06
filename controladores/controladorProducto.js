const Producto = require('./../modelos/modeloProducto');

const insertarProducto = (request,response)=>{
    const{titulo,precio,descripcion}=request.body;
    if (!titulo|| !precio || !descripcion){
        response.statusMessage="Para agregar un nuevo producto tiene estar todos los campos.";
        return response.status(406).end();   
    }
   else{
        const nuevoProducto ={
            titulo,precio,descripcion
        };

        Producto.create(nuevoProducto)
            .then(datoNuevo=>{
                return response.status(201).json(datoNuevo);
            })
            .catch(err=>{
                response.statusMessage="Hubo un error al ejecutar el insert. "+err;
                return response.status(400).end();
            })
       }  
}

const obtenerProductos= (request,response)=>{
    Producto.find()
        .then(listaProductos=>{
            return response.status(200).json(listaProductos);
        })
        .catch (err=>{
            response.statusMessage="Hubo un error al ejecutar el find. "+err;
            return response.status(400).end();
        });
}

const obtenerProducto= (request,response)=>{
    const{_id}=request.params;
    Producto.findOne({_id})
        .then(Producto=>{
            return response.status(200).json(Producto);
        })
        .catch (err=>{
            response.statusMessage="Hubo un error al ejecutar el find. "+err;
            return response.status(400).end();
        });
}

const ControladorProducto={
    insertarProducto,
    obtenerProductos,
    obtenerProducto
}
module.exports=ControladorProducto