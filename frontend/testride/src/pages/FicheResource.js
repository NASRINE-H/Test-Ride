import React,{ useState, useEffect } from 'react';
//import apiData from '../products.json';
import { useParams, useNavigate } from 'react-router-dom';
import BeerInfo from '../compenents/BeerInfo';
import Banner from '../compenents/Banner'

const FicheResource = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [beer, setBeer] = useState(null);
  

  

  useEffect(() => {
    const fetchBeer = async () => {
      try {
        const response = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
        const data = await response.json();
        if (data.length > 0) {
          setBeer(data[0]); // Accédez à la première bière du tableau
        } else {
            navigate('/notfound'); // Redirigez vers la page 404 si aucune bière n'est trouvée
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données de la bière :', error);
        navigate('/notfound');
      }
    };
  
    fetchBeer();
  }, [id, navigate]);

//   if (!beer) {
//     return null; // Affichez un état de chargement ou redirigez vers une page appropriée si les données de la bière ne sont pas encore disponibles
//   }

  const handleSave = async () => {
    try {
      const response = await fetch('https://api.punkapi.com/v2/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: beer.id, name: beer.name }),
      });
  
      if (response.ok) {
        // La requête s'est terminée avec succès
        console.log('La sauvegarde a été effectuée avec succès !');
      } else {
        // La requête a échoué
        throw new Error('Erreur lors de la sauvegarde');
        
      }
    } catch (error) {
      console.error('Erreur lors de la sauvegarde :', error);
      navigate('/notfound');
    }
  };

  return (
    <section>
    <div>
    <Banner/>
            <BeerInfo
             image_url={beer ? beer.image_url : ''}
             name={beer ? beer.name : ''}
             tagline={beer ? beer.tagline : ''}
             first_brewed={beer ? beer.first_brewed : ''}
             description={beer ? beer.description : ''}
            />
            <button className='btn-Sauvgarder' onClick={handleSave}>Sauvegarder</button>
         
       
    </div>
  </section>
  );
};

export default FicheResource;