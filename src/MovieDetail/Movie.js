import React, { useEffect, useState } from "react";
import '../MovieDetail/Movie.css';
import { useParams } from "react-router-dom";

const Movie = () => {
    const [currentMovieDetail, setMovie] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getData();
        window.scrollTo(0, 0);
    }, []);

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then(data => {
                if (data && data.success === false) {
                    throw new Error(data.status_message);
                }
                setMovie(data);
            })
            .catch(error => {
                console.error("Error fetching movie details:", error);
            });
    };

    return (
        <div className="moviee">
            <div className="movie__intro">
                <img className="movie__backdrop" src={currentMovieDetail ? `https://image.tmdb.org/t/p/original${currentMovieDetail.backdrop_path}` : ""} alt="Backdrop" />
            </div>
            {currentMovieDetail && (
                <div className="movie__detail">
                    <div className="movie__detailLeft">
                        <div className="movie__posterBox">
                            <img className="movie__poster" src={currentMovieDetail ? `https://image.tmdb.org/t/p/original${currentMovieDetail.poster_path}` : ""} alt="Poster" />

                        </div>
                       
                    </div>
                    <div className="movie__detailRight">
                        <div className="movie__detailRightTop">
                        <div className="title">{currentMovieDetail ? "" + currentMovieDetail.title : ""}</div>
                        <div className="overview__highlight">
                            <div className="overview">{currentMovieDetail ? "" + currentMovieDetail.overview : ""}</div>
                        </div>
                            <div className="original_title">{currentMovieDetail ? "" + currentMovieDetail.original_title : ""}</div>
                            <div className="tagline">{currentMovieDetail ? " " + currentMovieDetail.tagline : ""}</div>
                            <div className="status">{currentMovieDetail ? "Status: " + currentMovieDetail.status : ""}</div>
                            <div className="vote_average"> {currentMovieDetail ? "" + currentMovieDetail.vote_average : ""} <i className="fas fa-star" /></div>
                            <div className="Production_companies"> Vote Count</div>

                            <div className="vote_count">{currentMovieDetail ? " " + currentMovieDetail.vote_count : ""}</div>
                            <div className="Production_companies">Runtime </div>

                            <div className="runtime">{currentMovieDetail ? " " + currentMovieDetail.runtime + " mins" : ""}</div>
                            <div className="Production_companies">Release Date </div>
                             <div className="release_date">{currentMovieDetail ? " " + currentMovieDetail.release_date : ""}</div>
                             <div className="Production_companies"> Revenue </div>

                            <div className="revenue">{currentMovieDetail ? " " + currentMovieDetail.revenue : ""}</div>
                            <div className="Production_companies"> Popularity </div>

                            <div className="popularity">{currentMovieDetail ? " " + currentMovieDetail.popularity : ""}</div>
                            <div className="Production_companies"> Original Language </div>

                            <div className="original_language">{currentMovieDetail ? " " + currentMovieDetail.original_language : ""}</div>
                            <div className="Production_companies"> Budget</div>

                            <div className="budget">{currentMovieDetail ? "" + currentMovieDetail.budget : ""}</div>
                            <div className="Production_companies"> Genres</div>
                            <div className="movie__genres">
                           

                                {currentMovieDetail.genres && currentMovieDetail.genres.map(genre => (
                                    <span key={genre.id} className="movie__genre">{genre.name}</span>
                                ))}
                            </div>
                            <div className="Production">
                                <div className="Production_companies">Production Companies</div>
                                {currentMovieDetail.production_companies && currentMovieDetail.production_companies.map((company, index) => (
                                    <div key={index} className="movie__productionComapany ">
                                        {company.logo_path && (
                                            <>
                                                <img className="productionCompanyImage " src={"https://image.tmdb.org/t/p/original" + company.logo_path} alt="Production Company" />
                                                <div class="cname">{company.name}</div>
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="movie__releaseDate">
                                <div className="movie__releaseDate">Spoken Languages:</div>
                                {currentMovieDetail.spoken_languages && currentMovieDetail.spoken_languages.map((language, index) => (
                                    <div key={index}>{language.name}</div>
                                ))}
                            </div>
                            <div className="movie__releaseDate">
                                <div className="movie__releaseDate">Production Countries:</div>
                                {currentMovieDetail.production_countries && currentMovieDetail.production_countries.map((country, index) => (
                                    <div key={index}>{country.name}</div>
                                ))}
                            </div>
                        </div>
                        <div className="movie__lin">
                            <div className="movie__link">Useful Links</div>
                            {currentMovieDetail.homepage && (
                                <a href={currentMovieDetail.homepage} style={{ textDecoration: "none" }}>
                                    <p><span className="movie__homeButton ">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p>
                                </a>
                            )}
                            {currentMovieDetail.imdb_id && (
                                <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} style={{ textDecoration: "none" }}>
                                    <p><span className="movie__imdbButton ">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Movie;
