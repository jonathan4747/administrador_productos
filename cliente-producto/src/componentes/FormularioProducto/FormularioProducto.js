import './FormularioProducto.css'
import ListaProducto from "../ListaProducto/ListaProducto"
function FormularioProducto (props){
    return(
        <div>
            <div className='inicio'>
                <h3>Product Manager</h3>
                <form onSubmit={props.agregarProducto} className='formulario'>
                    <div className='item'>
                        <label htmlFor="titulo">
                            Title: 
                        </label>
                        <input type="text"id="titulo"
                                value={props.nuevoProducto.titulo}
                                onChange={(event)=> props.actualizaCampo('titulo',event.target.value)}/>
                    </div>
                    <div className='item'>
                        <label htmlFor="precio">
                            Price: 
                        </label>
                        <input type="number"id="precio" step="0.1"
                                value={props.nuevoProducto.precio}
                                onChange={(event)=> props.actualizaCampo('precio',event.target.value)}/>
                    </div>
                    <div className='item'>
                        <label htmlFor="descripcion">
                            Description: 
                        </label>
                        <input type="text"id="descripcion"
                                value={props.nuevoProducto.descripcion}
                                onChange={(event)=> props.actualizaCampo('descripcion',event.target.value)}/>
                    </div>
                    <button type='submit'>
                        create
                    </button>
                </form>
            </div>
            <div className='productos'>
                <h1>All Product:</h1>
                <div>
                    {
                        props.productos.map((producto,indice)=>{
                            return(
                                <ListaProducto producto={producto} key={'producto_' + indice}/>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default FormularioProducto