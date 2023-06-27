import React, { useState, useEffect } from 'react';
import Beers from '../components/Beers';
import Pagination from "../components/Pagination";
import Banner from '../components/Banner';
import SearchBar from '../components/SearchBar';
import { fetchBeers, fetchSearchedBeers } from '../api';

const Home = () => {
  //sont des variables d'état qui stockent le numéro de la page actuelle et permettent de le mettre à jour.
  const [currentPage, setCurrentPage] = useState(1);
  //sont des variables d'état qui stockent le nombre de bières par page et permettent de le mettre à jour.
  const [beersPerPage, setBeersPerPage] = useState(20);
  // sont des variables d'état qui stockent les données des bières récupérées depuis l'API et permettent de les mettre à jour.
  const [beers, setBeers] = useState([]);
  // sont des variables d'état qui stockent le nombre total de pages de bières et permettent de le mettre à jour.
  const [totalPages, setTotalPages] = useState(10);
  //sont des variables d'état qui stockent les résultats de recherche et permettent de les mettre à jour.
  const [searchResults, setSearchResults] = useState([]);
  //Le hook useEffect est utilisé pour effectuer une requête API au chargement de la page et 
  //à chaque changement de currentPage ou beersPerPage.

  useEffect(() => {
    const fetchBeersData = async () => {
      try {
        const data = await fetchBeers(currentPage, beersPerPage);
        
        
        setBeers(data);
      } catch (error) {
        // Gérez les erreurs de requête ici
      }
    };
 //  la fonction fetchBeers est appelée pour récupérer les données des bières
 // en fonction de la page actuelle et du nombre de bières par page.
    fetchBeersData();
  }, [currentPage, beersPerPage]);
//La fonction goToNextPage est appelée lorsque l'utilisateur clique sur le bouton "Next". Elle met à jour currentPage en ajoutant 1
 //et effectue une nouvelle requête API pour récupérer les bières de la page suivante.
  const goToNextPage = () => {
    const nextPage = currentPage + 1;
    if (nextPage > currentPage && nextPage <= totalPages) {
      setCurrentPage(nextPage);
      // fetchBeers(nextPage, beersPerPage).then((data) => {
      //   setBeers(data);
      // });
    }
  };
//La fonction goToPreviousPage est appelée lorsque l'utilisateur clique sur le bouton "Previous". Elle met à jour currentPage 
//en soustrayant 1 et effectue une nouvelle requête API pour récupérer les bières de la page précédente.
  const goToPreviousPage = () => {
    const prevPage = currentPage - 1;
    if (prevPage > 0 && prevPage < currentPage) {
      setCurrentPage(prevPage);
      // fetchBeers(prevPage, beersPerPage).then((data) => {
      //   setBeers(data);
      // });
    }
  };
//La fonction handleSearch est appelée lorsque l'utilisateur effectue une recherche dans la barre de recherche.
  const handleSearch = async (searchField, searchText) => {
    if (!searchText) {
      setTotalPages(10);
      setCurrentPage(1);
      setBeersPerPage(20);
      fetchBeers(currentPage, beersPerPage).then((data) => {
         setBeers(data);
       });
    } else {
      const searchedData = await fetchSearchedBeers(searchField, searchText);
      const totalResults = searchedData.length;
      const calculatedTotalPages = Math.ceil(totalResults / beersPerPage);
      setTotalPages(calculatedTotalPages);
      setCurrentPage(1);
      setSearchResults(searchedData);
      setBeers(searchedData.slice(0, beersPerPage));
    }
  };

  const handleHomeClick = () => {
    setTotalPages(10);
    setCurrentPage(1);
    setBeersPerPage(20);
    //: Réinitialise les résultats de recherche à une liste vide.
    setSearchResults([]);
    //Effectue une requête pour récupérer les données des bières en utilisant les valeurs actuelles de currentPage et beersPerPage,
    // puis met à jour l'état des bières avec les données récupérées.
    fetchBeers(currentPage, beersPerPage).then((data) => {
      setBeers(data);
    });
  };

  return (
    <div>
        <SearchBar onSearch={handleSearch} />
        <button className='boutonRetour' onClick={handleHomeClick}>Retour</button>
       <Banner/>
     <Beers beers={beers}  />
     <div className='boutonNextPre'>
        <button className='boutonPrev' onClick={goToPreviousPage}>Previous</button>
        <button className='boutonNext' onClick={goToNextPage}>Next</button>
      </div>
      <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage} 
    />

    </div>
  );
};

export default Home;