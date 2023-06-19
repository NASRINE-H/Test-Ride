import React, { useState } from "react";

const Header = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  return (
    <header>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Rechercher..."
          value={searchValue}
          onChange={handleSearchChange}
        />
        <button type="submit">Rechercher</button>
      </form>
    </header>
  );
};

export default Header;
