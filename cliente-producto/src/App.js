import './App.css';
import {useState , useEffect} from 'react';
import {Route , Switch , BrowserRouter} from 'react-router-dom';
import axios from 'axios';
import FormularioProducto from './componentes/FormularioProducto/FormularioProducto'

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
  return (
    <BrowserRouter >
      <Switch>
          <Route exact path="" render={(routeProps)=><FormularioProducto agregarProducto={agregarProducto}
                                                                          actualizaCampo={actualizaCampo}
                                                                          nuevoProducto={nuevoProducto}
                                                                          {...routeProps}/>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
