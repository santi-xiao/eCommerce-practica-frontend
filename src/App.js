import React, {useState} from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Carrito from './pages/Carrito';

const App = () => {

  const [carrito, setCarrito] = useState([]);

    return(
      <>
      <Header />
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-10'>
              <Outlet context={[carrito, setCarrito]}/>

            </div>
            <div className='col-md-2'>
              <Carrito carrito={carrito} setCarrito={setCarrito} />
            </div>
          </div>
        </div>
      </>
    )
}


export default App;
