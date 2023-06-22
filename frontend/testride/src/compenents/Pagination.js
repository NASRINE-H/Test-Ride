
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  const modifiePage = (pageNumber) => {
    onPageChange(pageNumber);
  };
  return (
    <div className="pagination">
     
      <div className="page-numbers">
        {pageNumbers.map((pageNumber) => (
          <div
            key={pageNumber}
            className={`page-number ${pageNumber === currentPage ? "active" : ""}`}
            onClick={() => modifiePage(pageNumber)}
          >
            {pageNumber}
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Pagination;