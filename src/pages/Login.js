import React from 'react';

const axios = require('axios');

const Login = () => {


    // const verificarCredenciales = (e) =>{
    //     e.preventDefault();
    //    axios.
    // }

    return(
        <>
        <div className='container'>
            <h1 className='text-center'>Login</h1>
            <form>
                <div className='form-group'>
                    <label form='email'>Email address</label>
                    <input type="email" className='form-control' id='email' name='email' />
                </div>
                <div className='form-group'>
                    <label form='password'>Password</label>
                    <input type="password" className='form-control' id='password' name='password' />
                </div>
                <input type="submit" value="Login" />
            </form>
        </div>
        </>
    )
}

export default Login;