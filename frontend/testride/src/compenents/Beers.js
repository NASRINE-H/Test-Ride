import React, { useState } from "react";
import { Link } from 'react-router-dom'
import apiData from '../products.json'



const Beers = () => {
  const[products] = useState(apiData.slice(0, 20))
console.log(products)
return (
  <div className='afficheProduct'>
{products.map((product) => {
   console.log(product)
   return(
    <div key={product.id} className='Beers'>
 <Link to={`/FicheResource/${product.id}`} key={product.id}>
   <img className='Beers-img' src={product.image_url} alt='beer'></img> 
   <h2 className='Beers-name'>{product.name}</h2>
  </Link>
  </div>
)
}) }
 </div>
)
};

export default Beers;



