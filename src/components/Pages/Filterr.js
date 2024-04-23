import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/Filter.css';
import Cards from '../Card/Card';

function Filterr() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedRating, setSelectedRating] = useState('');
  const [selectedReleaseDate, setSelectedReleaseDate] = useState('');
  const [sortBy, setSortBy] = useState('popularity.desc');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let url = 'https://api.themoviedb.org/3/discover/movie';
        url += `?api_key=4e44d9029b1270a757cddc766a1bcb63`;

        if (selectedGenre) url += `&with_genres=${selectedGenre}`;
        if (selectedYear) url += `&primary_release_year=${selectedYear}`;
        if (selectedLanguage) url += `&with_original_language=${selectedLanguage}`;
        if (selectedRating) url += `&vote_average.gte=${selectedRating}`;
        if (selectedReleaseDate) url += `&primary_release_date.gte=${selectedReleaseDate}`;
        url += `&sort_by=${sortBy}`;

        const response = await axios.get(url);
        setMovies(response.data.results);
        setFilteredMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [selectedGenre, selectedYear, selectedLanguage, selectedRating, selectedReleaseDate, sortBy]);

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    filterMovies(searchTerm, selectedGenre, selectedYear, selectedLanguage, selectedRating, selectedReleaseDate);
  };

  const handleGenreChange = (event) => {
    const genre = event.target.value;
    setSelectedGenre(genre);
  };

  const handleYearChange = (event) => {
    const year = event.target.value;
    setSelectedYear(year);
  };

  const handleLanguageChange = (event) => {
    const language = event.target.value;
    setSelectedLanguage(language);
  };

  const handleRatingChange = (event) => {
    const rating = event.target.value;
    setSelectedRating(rating);
  };

  const handleReleaseDateChange = (event) => {
    const releaseDate = event.target.value;
    setSelectedReleaseDate(releaseDate);
  };

  const handleSortByChange = (event) => {
    const sortByValue = event.target.value;
    setSortBy(sortByValue);
  };

  const filterMovies = (searchTerm, genre, year, language, rating, releaseDate) => {
    let filtered = movies;

    if (searchTerm) {
      filtered = filtered.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredMovies(filtered);
  };

  return (
    <div>
      <h1>Movie Filter</h1>
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    <select value={selectedGenre} onChange={handleGenreChange}>
  <option value="">All Genres</option>
  <option value="28">Action</option>
  <option value="35">Comedy</option>
  <option value="18">Drama</option>
  <option value="10751">Family</option>
  <option value="878">Science Fiction</option>
</select>
<select value={selectedYear} onChange={handleYearChange}>
  <option value="">All Years</option>
  <option value="1970">1970</option>
  <option value="1971">1971</option>
  <option value="1972">1972</option>
  <option value="1973">1973</option>
  <option value="1974">1974</option>
  <option value="1975">1975</option>
  <option value="1976">1976</option>
  <option value="1977">1977</option>
  <option value="1978">1978</option>
  <option value="1979">1979</option>
  <option value="1980">1980</option>
  <option value="1981">1981</option>
  <option value="1982">1982</option>
  <option value="1983">1983</option>
  <option value="1984">1984</option>
  <option value="1985">1985</option>
  <option value="1986">1986</option>
  <option value="1987">1987</option>
  <option value="1988">1988</option>
  <option value="1989">1989</option>
  <option value="1990">1990</option>
  <option value="1991">1991</option>
  <option value="1992">1992</option>
  <option value="1993">1993</option>
  <option value="1994">1994</option>
  <option value="1995">1995</option>
  <option value="1996">1996</option>
  <option value="1997">1997</option>
  <option value="1998">1998</option>
  <option value="1999">1999</option>
  <option value="2000">2000</option>
  <option value="2001">2001</option>
  <option value="2002">2002</option>
  <option value="2003">2003</option>
  <option value="2004">2004</option>
  <option value="2005">2005</option>
  <option value="2006">2006</option>
  <option value="2007">2007</option>
  <option value="2008">2008</option>
  <option value="2009">2009</option>
  <option value="2010">2010</option>
  <option value="2011">2011</option>
  <option value="2012">2012</option>
  <option value="2013">2013</option>
  <option value="2014">2014</option>
  <option value="2015">2015</option>
  <option value="2016">2016</option>
  <option value="2017">2017</option>
  <option value="2018">2018</option>
  <option value="2019">2019</option>
  <option value="2020">2020</option>
  <option value="2021">2021</option>
  <option value="2022">2022</option>
  <option value="2023">2023</option>
  <option value="2024">2024</option>
  <option value="2025">2025</option>
  <option value="2026">2026</option>
  <option value="2027">2027</option>
  <option value="2028">2028</option>
  <option value="2029">2029</option>
  <option value="2030">2030</option>
</select>

<select value={selectedLanguage} onChange={handleLanguageChange}>
  <option value="">All Languages</option>
  <option value="en">English</option>
  <option value="ta">Tamil</option>
  <option value="ml">Malayalam</option>
  <option value="kn">Kannada</option>
  <option value="te">Telugu</option>
  <option value="hi">Hindi</option>
</select>

  <select value={selectedRating} onChange={handleRatingChange}>
  <option value="">All Ratings</option>
  <option value="1">1+</option>
  <option value="2">2+</option>
  <option value="3">3+</option>
  <option value="4">4+</option>
  <option value="5">5+</option>
  <option value="6">6+</option>
  <option value="7">7+</option>
  <option value="8">8+</option>
  <option value="9">9+</option>
</select>

    
<select value={sortBy} onChange={handleSortByChange}>
  <option value="popularity.desc">Popularity Descending</option>
  <option value="popularity.asc">Popularity Ascending</option>
  <option value="release_date.desc">Release Date Descending</option>
  <option value="release_date.asc">Release Date Ascending</option>
  <option value="vote_average.desc">Rating Descending</option>
  <option value="vote_average.asc">Rating Ascending</option>
  <option value="primary_release_date.desc">Primary Release Date Descending</option>
  <option value="primary_release_date.asc">Primary Release Date Ascending</option>
  <option value="original_title.asc">Title (A-Z)</option>
  <option value="original_title.desc">Title (Z-A)</option>
</select>
<div className='filtercard'>
      <ul>
        {  filteredMovies.map(movie => (
                        <Cards
                         key={movie.id} movie={movie} />
                    ))}
      </ul>
      </div>
    </div>
  );
}

export default Filterr;
