import Producto from "../Producto/Producto";
function DetalleProducto (props){
    console.log(props+"DeatlleProducto")
    const productoSeleccionado = props.productos.find((producto,index)=>producto._id===props.match.params._id)
    return(
        <div>
            {
            (productoSeleccionado)?< Producto producto={productoSeleccionado} />:<div>No encontrado</div>
            }
        </div>
    )
}
export default DetalleProducto;