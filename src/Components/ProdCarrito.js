import React from 'react';

const ProdCarrito = ({id, nombre, precio, cantidad, carrito, setCarrito, index}) => {

    const eliminarDelCarrito = () =>{
        let newCarrito = [...carrito];
        let prod = newCarrito.filter((p)=>p.id !== id);
        setCarrito(prod);
    }

    return(
        <>
            <li className='list-group-item' key={id}>
                <p className='text-warning'>{nombre} <span className='text-black fw-bold'>{precio * cantidad}€</span> <span className='text-muted'>x{cantidad}</span></p>
                <div className='btn btn-dark' onClick={eliminarDelCarrito}>x</div>
            </li>
        </>
    )
}

export default ProdCarrito;