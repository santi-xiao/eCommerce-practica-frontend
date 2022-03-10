import React from 'react';

const Producto = ({id, nombre, descripcion, precio, oferta, cantidad, activo, publico}) => {

    return(
        <>
            <h1>{nombre}</h1>
            <p>{descripcion}</p>
        </>
    )
}

export default Producto;