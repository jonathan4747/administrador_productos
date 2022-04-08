function FormularioProducto (props){
    return(
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={props.agregarProducto}>
                <div>
                    <label htmlFor="titulo">
                        Title: 
                    </label>
                    <input type="text"id="titulo"
                            value={props.nuevoProducto.titulo}
                            onChange={(event)=> props.actualizaCampo('titulo',event.target.value)}/>
                </div>
                <div>
                    <label htmlFor="precio">
                        Price: 
                    </label>
                    <input type="number"id="precio" step="0.1"
                            value={props.nuevoProducto.precio}
                            onChange={(event)=> props.actualizaCampo('precio',event.target.value)}/>
                </div>
                <div>
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
    )
}

export default FormularioProducto