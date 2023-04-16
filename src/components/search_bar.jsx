import React, { useState } from 'react';

function SearchBar() {
  const [searchterm, setSearchTerm] = useState('');

  // add this above your return
  const onInputChange = (event) => {
    console.log(event.target.value);
    // in your onInputChange method add:
    setSearchTerm(event.target.value);
  };

  return (
    <div id="search-bar">
      <input onChange={onInputChange} value={searchterm} />

    </div>
  );
}

export default SearchBar;
