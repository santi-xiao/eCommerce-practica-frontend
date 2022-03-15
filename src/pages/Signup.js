import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Signup = () => {

    let navigate = useNavigate();

    const [usuario, setUsuario] = useState(null);

    useEffect(() =>{
        if(usuario){
            try{
                axios.post('http://127.0.0.1:8080/api/usuarios/new', usuario)
                .then(()=>{
                    console.log('guardado con exito');
                    navigate("/login") ;
                });
            }catch(error){
                console.log(error);
            }
        }
    },[usuario]);

    const handleSubmit = (e) => {
        e.preventDefault()
        const target = e.target;
        const nombre = target.nombre.value;
        const apellido = target.apellido.value;
        const direccion = target.direccion.value;
        const telefono = target.telefono.value;
        const contraseña = target.contraseña.value;
        const contraseña2 = target.contraseña2.value;
        const email = target.email.value;
        const fecha_nacimiento = target.fecha_nacimiento.value;
        const activo = true;

        if(nombre.trim() === "" || apellido.trim() === "" || direccion.trim() === "" || !fecha_nacimiento || email.trim() === ""){
            return console.log("Arregla el form");
        }
        if(telefono.trim() === ""){
            return console.log("arregla telefono");
        }
        if(contraseña !== contraseña2){
            return console.log("contraseñas distintas");
        }
        setUsuario({
            tipo: {
                id: 2,
                nombre: "USUARIO"
            },
            nombre,
            apellido,
            direccion,
            telefono,
            contraseña,
            email,
            fecha_nacimiento,
            activo
        });
    }

    return(
        <>
        <div className='container'>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name='nombre' id='nombre' required/>
                </div>
                <div className='form-control'>
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" name='apellido' id='apellido' required/>
                </div>
                <div className='form-control'>
                    <label htmlFor="direccion">Dirección</label>
                    <input type="text" name='direccion' id='direccion' required/>
                </div>
                <div className='form-control'>
                    <label htmlFor="telefono">Teléfono</label>
                    <input type="text" name='telefono' id='telefono' required/>
                </div>
                <div className='form-control'>
                    <label htmlFor="contraseña">Contraseña</label>
                    <input type="password" name='contraseña' id='contraseña' required/>
                </div>
                <div className='form-control'>
                    <label htmlFor="contraseña2">Contraseña</label>
                    <input type="password" name='contraseña2' id='contraseña2' required/>
                </div>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='email' required/>
                </div>
                <div className='form-control'>
                    <label htmlFor="fecha_nacimiento">Fecha de nacimiento</label>
                    <input type="date" name='fecha_nacimiento' id='fecha_nacimiento' required/>
                </div>
                <input type="submit" value="sign up" />
            </form>
        </div>
        </>
    )
}

export default Signup;