import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

    return(
        <div className='container'>
            <h1>Welcome to Dead By Daylight non official Store!</h1>
            <p>Dead by Daylight is an indie horror game developed and published by Behaviour Interactive. Dead by Daylight is both an action and survival horror multiplayer game in which one crazed, unstoppable Killer hunts down four Survivors through a terrifying nightmarish world in a deadly game of Cat & Mouse. It was released on 14 June 2016 for PC (Steam), 20 June 2017 for Console (XONE/PS4), 24 September 2019 for Nintendo Switch and 16 April 2020 for Mobile.</p>
            <Link to="/productos/survivors">Survivors</Link>
            <Link to="/productos/killers">Killers</Link>
        </div>
    )
}

export default Home;