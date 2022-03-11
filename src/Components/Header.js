import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {

    return(
        <>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='container-fluid'>
                    <Link to="/">Dead By Dayligth</Link>
                </div> 
            </nav>
        </>
    )
}

export default Header;