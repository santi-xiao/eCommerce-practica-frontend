import React, { useState, useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import Producto from '../Components/Producto';

const axios = require('axios');

const DetallesProducto = () =>{
    let params = useParams();
    const [carrito, setCarrito] = useOutletContext();

    const [producto, setProducto] = useState(null);

    const handleClick = () => {
      setCarrito((p) => p +1);
    }

    useEffect(() => {
        axios.get("http://127.0.0.1:8080/api/productos/producto/" + params.productoId)
        .then(res => {
          const producto = res.data;
          setProducto(producto);
        });
      }, [params.productoId])

    return(
        <div>
            <Producto  {...producto} carrito={carrito} setCarrito={setCarrito} />
            <button onClick={handleClick}>{carrito}</button>
        </div>
    )
}

export default DetallesProducto;