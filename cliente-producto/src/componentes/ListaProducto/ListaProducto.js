import{Link} from 'react-router-dom';
function ListaProducto(props){
    console.log(props)
    return(
        <div>
            <div>
               <Link to={'/'+props.producto._id}><p>{props.producto.titulo}</p></Link>
            </div>
        </div>
    )

}
export default ListaProducto;