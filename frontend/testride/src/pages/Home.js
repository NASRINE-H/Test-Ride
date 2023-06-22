import React, { useState, useEffect } from 'react';
import Beers from '../compenents/Beers';
import Pagination from '../compenents/Pagination'

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [beersPerPage, setBeersPerPage] = useState(20);
    const [beers, setBeers] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [sortBy, setSortBy] = useState('');

    const sortByName = () => {
        setSortBy('name');
      };
    
      useEffect(() => {
        const fetchBeers = async () => {
          try {
            const response = await fetch(`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=${beersPerPage}`);
            const data = await response.json();
      
            let selectedPage = ((data[0].id - 1) / 20) + 1;
            setCurrentPage(selectedPage);
            setTotalPages(10);
            setBeersPerPage(20);
            let sortedData = [];
            if (sortBy === 'name') {
              sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
            } else {
              sortedData = data;
            }
            setBeers(sortedData);
          } catch (error) {
            console.error('Erreur lors de la récupération des données des bières :', error);
          }
        };
      
        fetchBeers();
      }, [currentPage, beersPerPage, sortBy]);
  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage<totalPages?prevPage + 1:totalPages);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage>1? prevPage - 1: 1);
  };

  return (
    <div>
       
      <div className='boutonNextPre'>
        <button className='boutonPrev' onClick={goToPreviousPage}>Previous</button>
        <button className='boutonNext' onClick={goToNextPage}>Next</button>
      </div>
      <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage} // Utilisez setCurrentPage comme callback pour onPageChange
    />
     <Beers beers={beers} onSortByName={sortByName} />

      
    </div>
  );
};

export default Home;