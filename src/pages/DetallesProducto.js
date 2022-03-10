import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Producto from '../Components/Producto';

const axios = require('axios');

const DetallesProducto = () =>{
    let params = useParams();

    const [producto, setProducto] = useState(null);

    useEffect(() => {
        axios.get("http://127.0.0.1:8080/api/productos/producto/" + params.productoId)
        .then(res => {
          const producto = res.data;
          setProducto(producto);
        });
      }, [params.productoId])

    return(
        <div>
            <Producto  {...producto}/>
        </div>
    )
}

export default DetallesProducto;