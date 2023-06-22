import React from 'react';
import images from './Images/chimay.jpg';

const Banner = () => {
    
    return (
        
        <header className='banner'>
            
           <div className='Logo'><img className='imgabanner'  src={images}  alt='beer'/></div> 
           
        </header>
    );
};

export default Banner;