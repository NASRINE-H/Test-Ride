import React, { useState, useEffect } from 'react';
import Beers from '../components/Beers';
import Pagination from "../components/Pagination";
import Banner from '../components/Banner';
import SearchBar from '../components/SearchBar';
import { fetchBeers, fetchSearchedBeers } from '../api';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [beersPerPage, setBeersPerPage] = useState(20);
  const [beers, setBeers] = useState([]);
  const [totalPages, setTotalPages] = useState(10);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchBeersData = async () => {
      try {
        const data = await fetchBeers(currentPage, beersPerPage);
        setBeers(data);
      } catch (error) {
        // Gérez les erreurs de requête ici
      }
    };

    fetchBeersData();
  }, [currentPage, beersPerPage]);

  const goToNextPage = () => {
    const nextPage = currentPage + 1;
    if (nextPage > currentPage && nextPage <= totalPages) {
      setCurrentPage(nextPage);
      fetchBeers(nextPage, beersPerPage).then((data) => {
        setBeers(data);
      });
    }
  };

  const goToPreviousPage = () => {
    const prevPage = currentPage - 1;
    if (prevPage > 0 && prevPage < currentPage) {
      setCurrentPage(prevPage);
      fetchBeers(prevPage, beersPerPage).then((data) => {
        setBeers(data);
      });
    }
  };

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
    setSearchResults([]);
    fetchBeers(currentPage, beersPerPage).then((data) => {
      setBeers(data);
    });
  };

  return (
    <div>
        <SearchBar onSearch={handleSearch} />
        <button className='boutonHome' onClick={handleHomeClick}>Retour</button>
       <Banner/>
     <Beers beers={beers}  />
     <div className='boutonNextPre'>
        <button className='boutonPrev' onClick={goToPreviousPage}>Previous</button>
        <button className='boutonNext' onClick={goToNextPage}>Next</button>
      </div>
      <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage} // Utilisez setCurrentPage comme callback pour onPageChange
    />

    </div>
  );
};

export default Home;