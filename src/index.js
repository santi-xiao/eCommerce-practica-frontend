import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './pages/Home'
import Productos from './pages/Productos';
import DetallesProducto from './pages/DetallesProducto';
import Pasarela from './pages/Pasarela';
import Login from './pages/Login';
import Signup from './pages/Signup';


ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} >
        <Route index element={<Home />} />
        <Route path="productos/:categoriaNombre" element={<Productos/>}>
          <Route index element={<h1>Detalles producto</h1>} />
          <Route path=':productoId' element={<DetallesProducto/>}/>
        </Route>
        <Route path="checkout" element={<Pasarela/>} />
      </Route>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup />}/>
      <Route to="*" element={<p>Nada por aqui!</p>} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
