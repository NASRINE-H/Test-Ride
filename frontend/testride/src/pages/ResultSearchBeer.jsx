import React from 'react';
import BeerInfo from '../components/BeerInfo';

const ResultSearchBeer = ({ beers }) => {
    if (!beers || beers.length === 0) {
      return <p>Aucun résultat de recherche</p>;
    }
  
    return (
      <div>
        <h1>Résultats de recherche</h1>
        {beers.map((beer) => (
          <BeerInfo key={beer.id} 
          image_url={beer ? beer.image_url : ''}
          name={beer ? beer.name : ''}
          tagline={beer ? beer.tagline : ''}
          first_brewed={beer ? beer.first_brewed : ''}
          description={beer ? beer.description : ''} />
        ))}
      </div>
    );
  };

export default ResultSearchBeer;