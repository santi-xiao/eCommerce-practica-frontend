import React , {useEffect, useState} from "react";
import { NavLink, Outlet } from "react-router-dom";


const axios = require('axios');

const Productos = () => {

    const [listaProductos, setListaProductos] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8080/api/productos/todos')
    .then(res => {
      const productos = res.data;
      setListaProductos(productos);
    });
  }, [])

    return(
        <>
        <div className='row'>
            <div className="col-md-4">
                <h1>Productos</h1>
                <ul>
                    {!listaProductos ? 'Loading...' : listaProductos.map((prod) => (
                    <NavLink to={`/productos/${prod.id}`} style={({isActive}) =>{
                        return {
                            display: "block",
                            margin: "1rem 0",
                            color: isActive ? "red" : "",
                        }
                    }} key={prod.id}>
                        <div className="card">
                            <div className="card-body">
                                <img className="img-fluid" src={prod.imagenDni} alt="imagen dni" />
                                <p>{prod.nombre}</p>
                            </div>
                        </div>
                    </NavLink>
                    ))}
                </ul>
            </div>
            <div className="col-md-5">
                    <div className="sticky-top">
                        <Outlet/>
                    </div>
            </div>
        </div>
        </>
    )
}

export default Productos;