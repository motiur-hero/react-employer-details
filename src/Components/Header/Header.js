import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'
const Header = () => {
    return (
        <div className='header'>
            
                <img src={logo} alt=''></img>
            
            <h2>Employer Details</h2>
        </div>
    );
};

export default Header;