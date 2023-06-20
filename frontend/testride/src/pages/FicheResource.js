import React from 'react';
import apiData from '../products.json';
import { useParams, useNavigate } from 'react-router-dom';
import BeerInfo from '../compenents/BeerInfo';

const FicheResource = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const beerId = apiData.find((item) => item.id === parseInt(id));

  if (!beerId) {
    navigate('/404'); // Redirige vers la page 404
    return null; // Retourne null pour éviter le rendu des éléments suivants
  }

  return (
    <section>
      {beerId && (
        <div>
          <BeerInfo image_url={beerId.image_url}name={beerId.name} tagline={beerId.tagline} first_brewed={beerId.first_brewed} description={beerId.description} />
        </div>
      )}
    </section>
  );
};

export default FicheResource;