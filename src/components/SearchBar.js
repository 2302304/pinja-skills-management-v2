import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Hae konsultteja..."
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

export default SearchBar;
