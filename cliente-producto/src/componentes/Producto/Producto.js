import './Producto.css'
function Producto(props){
    return(
        <div className="lista">
            <h2>{props.producto.titulo}</h2>
           <p>Price: $ {props.producto.precio}</p>
            <p>Description: {props.producto.descripcion}</p>
        </div>
    )

}
export default Producto;