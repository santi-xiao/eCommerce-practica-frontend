import React from 'react';

const Producto = ({id,nombre,descripcion,categoria,precio,imagenDni,imagenCuerpo,activo,publico}) => {

    return(
        <div className='container p-3'>
            <img src={imagenCuerpo} alt="imagen cuerpo" className='float-start'/>
            <h1>{nombre}</h1>
            <p>{descripcion}</p>
        </div>
    )
}

export default Producto;