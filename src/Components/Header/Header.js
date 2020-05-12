import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'
const Header = () => {
    return (
        <div className='header'>
            
                <div><img src={logo} alt=''></img></div>
            
            <div className='nav'>
                <a href='/employe'>Employe</a>
                <a href='/mothly'>Month Report</a>
                <a href='/yearly'>Year Report</a>
            </div>
        </div>
    );
};

export default Header;