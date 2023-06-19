import React from 'react';

const Pagination = ({ currentPage, totalPages, onNextPage, onPreviousPage }) => {
  return (
    <div className="pagination">
      {currentPage > 1 && (
        <button onClick={onPreviousPage}>Previous</button>
      )}
      <span>{currentPage}</span>
      {currentPage < totalPages && (
        <button onClick={onNextPage}>Next</button>
      )}
    </div>
  );
};

export default Pagination;