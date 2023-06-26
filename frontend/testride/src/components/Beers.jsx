import React from "react";
import { Link } from 'react-router-dom';

 const Beers = ({ beers ,onSortByName}) => {
  return (
    <div className='afficheProduct'>
      {beers.map((beer) => (
        <div key={beer.id} className='Beers'>
          <Link to={`/FicheResource/${beer.id}`} key={beer.id}>
            <img className='Beers-img' src={beer.image_url} alt='beer'></img> 
            <h2 className='Beers-name'>{beer.name}</h2>
          </Link>
          
        </div>
      ))}
    </div>
  );
};

export default Beers;
