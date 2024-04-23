import React, { useEffect, useState } from "react";
import '../Styles/MoviePop.css';
import { useParams } from "react-router-dom";
import Cards from "../Card/Card";

const PopEng = () => {
    const [movieList, setMovieList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const { type } = useParams();

    useEffect(() => {
        getData(currentPage);
    }, [currentPage, type]);

    const getData = (page) => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_original_language=en`)
            .then(res => res.json())
            .then(data => setMovieList(data.results));
    };

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "|> Trending ENGLISH MOVIES").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Cards key={movie.id} movie={movie} />
                    ))
                }
            </div>
            <div className="pagination">
                <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
                <span>Page {currentPage}</span>
                <button onClick={handleNextPage}>Next</button>
            </div>
        </div>
    );
};

export default PopEng;
