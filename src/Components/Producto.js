import React from 'react';

const Producto = ({id,nombre,descripcion,categoria,precio,imagenDni,imagenCuerpo,activo,publico}, props) => {

    console.log(props);
    const handleAddCart = ()=>{
        props.setCarrito((p) => p +1)
    }

    return(
        <div className='container p-3 mt-5'>
            <div className='card'>
                <div className='card-body'>
                    <img src={imagenCuerpo} alt="imagen cuerpo" className='float-start'/>
                    <div className='vstack gap-5 text-end'>
                        <h1 className='card-title  row-1'>{nombre}</h1>
                        <p>{descripcion}</p>
                        <h3 className='fw-bold '>{precio} €</h3>
                    </div>
                </div>
                    <div className='d-grid'>
                        <button className='btn btn-warning' onClick={handleAddCart}>{props.carrito}</button>
                    </div>
            </div>
        </div>
    )
}

export default Producto;