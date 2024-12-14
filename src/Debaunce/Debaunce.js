import React, { useState } from 'react';

function DebouncedSearch() {
  const [query, setQuery] = useState('');
  
  // Debounce function
  const debounce = (func, delay) => {
    let timer;
    return function(...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  // Debounced handler for search input
  const handleSearch = debounce((value) => {
    console.log(`Searching for: ${value}`);
    // Perform your actual search or update here
  }, 300); // 300ms delay

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setQuery(newValue);
    handleSearch(newValue);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search"
      />
    </div>
  );
}

export default DebouncedSearch;
