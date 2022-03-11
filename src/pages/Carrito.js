import React from 'react';
import { Link } from 'react-router-dom';

const Carrito = (props) => {
    

    const calcularPrecioTotal = () =>{
        let total = 0;
        props.carrito.map((prod) => {
            total += prod.precio * prod.cantidad;
        })
        return total;
    }

    if(props.carrito != null){
        return (
            <div className='sticky-top'>
                <h1>Cesta</h1>
                <ul className="list-group scroll-div">
                    {props.carrito.map((prod) => (
                        <li className='list-group-item' key={prod.id}>
                            <p className='text-warning'>{prod.nombre} <span className='text-black fw-bold'>{prod.precio * prod.cantidad}€</span> <span className='text-muted'>x{prod.cantidad}</span></p>
                        </li>
                    ))}
                </ul>
                <p>Total: <span className='fw-bold'>{calcularPrecioTotal()}</span> €</p>  
                <Link to="/" className='btn btn-warning btn-lg btn-block'>Ir a la cesta</Link>     
            </div>
        )
    }
    
    return(
        <>
            <h1>Carrito!</h1>
        </>
    )
        
}

export default Carrito;