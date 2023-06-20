import React from "react";
import { Link } from 'react-router-dom';

const Beers = ({ beers }) => {
  return (
    <div className='afficheProduct'>
      {beers.map((product) => (
        <div key={product.id} className='Beers'>
          <Link to={`/FicheResource/${product.id}`} key={product.id}>
            <img className='Beers-img' src={product.image_url} alt='beer'></img> 
            <h2 className='Beers-name'>{product.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Beers;
