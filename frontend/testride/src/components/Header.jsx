import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
    
    return (
        
        <header className='Header'>
            {/* on a met {images} parceque on l' a  porté du coup le code va appliqué l'image choisi */ }
           
            <nav className='nav'>
             <Link className='nav_home' to="/">
                Accueil
             </Link>
            
            </nav>
        </header>
    );
};

export default Header;