import React,{useState} from 'react';
const SearchBar = ({ onSearch }) => {
  const [searchField, setSearchField] = useState('beer_name');
  const [searchText, setSearchText] = useState('');

  const handleSearchFieldChange = (e) => {
    setSearchField(e.target.value);
  };

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchField, searchText);
  };

  return (
    <div>
      <select className='nom-année' value={searchField} onChange={handleSearchFieldChange}>
        <option value="beer_name">Nom</option>
       
      </select>
      <input className='input-recherche'
        type="text"
        value={searchText}
        onChange={handleSearchTextChange}
        placeholder="Rechercher..."
      />
      <button className='btn-chercher' onClick={handleSearch}>Chercher</button>
    </div>
  );
};

export default SearchBar;
