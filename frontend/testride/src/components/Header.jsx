import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
    
    return (
        
        <header className='Header'>
           
            <nav className='nav'>
             <Link className='nav_home' to="/">
                Accueil
             </Link>
            
            </nav>
        </header>
    );
};

export default Header;