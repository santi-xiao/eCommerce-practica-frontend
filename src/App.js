import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';

const App = () => {

    return(
      <>
      <Header />
      <div className='container-fluid'>
       <Outlet/>
      </div>
      </>
    )
}


export default App;
