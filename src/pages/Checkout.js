import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Checkout = () => {

    const [carrito,setCarrito] = useOutletContext();
    console.log(carrito);

    return(
        <>
            <h1>Checkout</h1>
            {carrito.map((prod) => (
                <div className='card' key={prod.id}>
                    <div className='card-body'>
                        <p>{prod.nombre}</p>
                        <p>{prod.precio}</p>
                        <p>{prod.cantidad}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Checkout;