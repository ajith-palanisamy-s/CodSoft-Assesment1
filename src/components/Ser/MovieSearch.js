import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './MovieSearch.css'; 
import Cards from '../Card/Card';
import PopEng from '../EnglishList/PopEng';

function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchMovies = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&query=${query}`);
      setResults(response.data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div class="serpage">
      <input
      class="searchbar"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
      />
      <button  class="serbox" onClick={searchMovies}>Search</button>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {results.map((movie) => (
          <div key={movie.id} style={{ margin: '10px', textAlign: 'center' }}>
           <Cards movie={movie} />
          </div>
        ))}
      </div>
      <PopEng/>
    </div>
  );
}

export default SearchPage;
