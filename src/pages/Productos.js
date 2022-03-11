import React , {useEffect, useState} from "react";
import { NavLink, Outlet, useOutletContext, useParams } from "react-router-dom";


const axios = require('axios');

const Productos = () => {
    let params = useParams();
    const [carrito, setCarrito] = useOutletContext();


    const [listaProductos, setListaProductos] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8080/api/productos/' + params.categoriaNombre + "/todos")
    .then(res => {
      const productos = res.data;
      setListaProductos(productos);
    });
  }, [params.categoriaNombre])

    return(
        <>
        <div className='row'>
            <div className="col-md-7">
                <h1>Productos</h1>
                <div className="d-flex flex-wrap">
                    {!listaProductos ? 'Loading...' : listaProductos.map((prod) => (
                    <NavLink to={`/productos/${prod.categoria.nombre}/${prod.id}`} style={({isActive}) =>{
                        return {
                            display: "block",
                            margin: "1rem 0",
                            color: isActive ? "red" : "",
                        }
                    }} key={prod.id}>
                        <div className="card">
                            <div className="card-body">
                                <img className="img-fluid float-start" src={prod.imagenDni} alt="imagen dni" />
                                <p>{prod.nombre}</p>
                            </div>
                        </div>
                    </NavLink>
                    ))}
                </div>
            </div>
            <div className="col-md-5">
                    <div className="sticky-top">
                        <Outlet context={[carrito, setCarrito]}/>
                    </div>
            </div>
        </div>
        </>
    )
}

export default Productos;