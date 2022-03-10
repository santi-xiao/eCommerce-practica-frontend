import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Categorias from './pages/Categorias';
import Productos from './pages/Productos';
import DetallesProducto from './pages/DetallesProducto';


ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="productos" element={<Productos/>}>
          <Route index element={<h1>Detalles producto</h1>} />
          <Route path=':productoId' element={<DetallesProducto/>}/>
        </Route>
        <Route path="categorias" element={<Categorias/>}/>
        <Route path="*" element={<p>Nada por aquí!</p>} />
      </Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
