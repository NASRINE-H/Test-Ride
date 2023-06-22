import React from 'react';

const BeerInfo = ({ image_url, name, tagline, first_brewed, description }) => {
  return (
    <div className="BeerInfo">
      <img src={image_url} alt="beer" />
      <h1 className="nameInfo">{name}</h1>
      <h2 className="taglineInfo">{tagline}</h2> 
      <h2 className="first_brewed">{first_brewed}</h2> 
      <h2 className="description">{description}</h2>
    </div>
  );
};

export default BeerInfo;