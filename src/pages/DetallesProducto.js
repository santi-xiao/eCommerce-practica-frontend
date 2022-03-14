import React, { useState, useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import Producto from '../Components/Producto';

const axios = require('axios');

const DetallesProducto = (props) =>{
    let params = useParams();
    const [carrito, setCarrito] = useOutletContext();

    const [producto, setProducto] = useState(null);

    const handleClick = () => {
      let newCarrito = [...carrito];

      let prodIndex = newCarrito.findIndex((prod => prod.id === producto.id));

      if(prodIndex > -1){
        newCarrito[prodIndex].cantidad += 1;
      }else{
        newCarrito.push({id:producto.id ,nombre: producto.nombre, precio: producto.precio, cantidad: 1})
      }
      setCarrito(newCarrito);
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
            <Producto  {...producto} />
            <button onClick={handleClick} className="btn btn-warning">Add to cart</button>
        </div>
    )
}

export default DetallesProducto;