import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
           <div>
             <h1>My Quiz Site</h1>
           </div>
           <div className='nav'>
            <Link to='/'>Home</Link>
            <Link to='/statistics'>statistics</Link>
            <Link to='/blog'>Blog</Link>
           </div>
        </nav>
    );
};

export default Header;