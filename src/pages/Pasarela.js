import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Pasarela = () =>{
    const [carrito, setCarrito] = useOutletContext();
    console.log(carrito);
    return(
        <>
            <h1>Pasarela</h1>
        </>
    )
}

export default Pasarela;