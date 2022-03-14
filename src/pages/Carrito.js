import React from 'react';
import { Link } from 'react-router-dom';
import ProdCarrito from '../Components/ProdCarrito';

const Carrito = (props) => {

    const {carrito, setCarrito} = props;

    const calcularPrecioTotal = () =>{
        let total = 0;
        props.carrito.map((prod) => {
            total += prod.precio * prod.cantidad;
            return total;
        })
        return total;
    }





    if(props.carrito != null){
        return (
            <div className='sticky-top'>
                <h1>Cart</h1>
                <ul className="list-group scroll-div">
                    {props.carrito.map((prod) => (
                        <ProdCarrito {...prod} key={prod.id} carrito={carrito} setCarrito={setCarrito}/>
                    ))}
                </ul>
                <p>Total: <span className='fw-bold'>{calcularPrecioTotal()}</span> €</p>  
                <Link to="/" className='btn btn-warning btn-lg btn-block'>Ir a la cesta</Link>     
            </div>
        )
    }
    
    return(
        <>
            <h1>Cart</h1>
        </>
    )
        
}

export default Carrito;