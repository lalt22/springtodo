import { useState, useEffect } from 'react';
import './SearchBar.scss';
import React from 'react';

const SearchBar = ({ setSearchParam }: any) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    setSearchParam(inputValue);
  }, [inputValue]);

  return (
    <input
      className='input-bar'
      type='text'
      onChange={handleInputChange}
      placeholder='Search By Description'
    />
  );
};

export default SearchBar;
