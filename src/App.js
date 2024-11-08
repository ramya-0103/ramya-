import React, { useState } from 'react';
import './App.css';
import News from './components/News'; // Import News component
import Search from './components/Search'; // Import Search component
import CategoryFilter from './components/CategoryFilter'; // Import CategoryFilter component

const App = () => {
  const [category, setCategory] = useState('');
  const [query, setQuery] = useState('');

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery); 
  };

  const handleSelectCategory = (selectedCategory) => {
    setCategory(selectedCategory);
    setQuery(''); // Reset the search query when a category is selected
  };

  return (
    <div className="App">
      <h1>News App</h1>
      {/* Search and CategoryFilter Components */}
      <div className="search-category-filter">
        <Search onSearch={handleSearch} />
        <CategoryFilter onSelectCategory={handleSelectCategory} />
      </div>

      {/* News Component to display articles */}
      <News category={category} query={query} />
    </div>
  );
};

export default App;
