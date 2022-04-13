import './App.css';
import {useState , useEffect} from 'react';
import {Route , Switch , BrowserRouter} from 'react-router-dom';
import axios from 'axios';
import FormularioProducto from './componentes/FormularioProducto/FormularioProducto';
import DetalleProducto from './componentes/DetalleProducto/DetalleProducto';
function App() {
  const nuevoProductoInicial = {
    titulo:'',
    precio:'',
    descripcion: ''  
  }
  const [productos,setProductos]= useState([]);
  const [nuevoProducto,setNuevoProducto]=useState(nuevoProductoInicial);

  const agregarProducto=(event)=>{
    event.preventDefault();
    axios.post('http://localhost:8080/api/producto/new',nuevoProducto)
      .then(response=>{
        setProductos((productoPrev)=>[...productoPrev,response.data])
      })
    setNuevoProducto((nuevoProductoPrev)=>nuevoProductoInicial)
  }
  const actualizaCampo = (propiedad,valor)=>{
    setNuevoProducto({
      ...nuevoProducto,
      [propiedad]:valor
    });
  }

  useEffect(()=>{
    axios.get('http://localhost:8080/api/producto/look')
      .then(response=>{
        const listaProducto = response.data.map((producto,index)=>{
          return{
            _id:producto._id,
            titulo : producto.titulo,
            precio: producto.precio,
            descripcion: producto.descripcion
          }
        });
        setProductos((productoPrev)=> listaProducto)
      })
  },[])


  
  return (
    <BrowserRouter >
      <Switch>  
          <Route exact path="/:_id" render={(routeProps)=><DetalleProducto {...routeProps}
                                                                        productos={productos}/>}/>

          <Route exact path="" render={(routeProps)=><FormularioProducto agregarProducto={agregarProducto}
                                                                          actualizaCampo={actualizaCampo}
                                                                          nuevoProducto={nuevoProducto}
                                                                          productos={productos}
                                                                          {...routeProps}/>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
