import React, { useEffect, useState } from "react"
import '../Styles/HomeStyles.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";




const PopTelCaro= () => {

    const [ popularMovies, setPopularMovies ] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&include_adult=false&include_video=false&language=en-US&page=1&sort_by=revenue.desc&with_original_language=te")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    }, [])

    return (
        <div className="movie__list"> 
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={1}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovies.map(movie => (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="soon"/>
                                </div>

                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                                    <div className="posterImage__title">{movie ? movie.title: ""}</div>

                                    <div role="radiogroup" class="ui rating" tabindex="-1">
                                    <i role="radio" tabindex="0" aria-checked="false" aria-posinset="1" aria-setsize="5" class="icon"></i>
                                    <i role="radio" tabindex="0" aria-checked="false" aria-posinset="2" aria-setsize="5" class="icon"></i>
                                    <i role="radio" tabindex="0" aria-checked="false" aria-posinset="3" aria-setsize="5" class="icon"></i>
                                    <i role="radio" tabindex="0" aria-checked="false" aria-posinset="4" aria-setsize="5" class="icon"></i>
                                    <i role="radio" tabindex="0" aria-checked="false" aria-posinset="5" aria-setsize="5" class="icon"></i></div>

                                    {/* <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average :""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div> */}
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
              
            </div>
        </div>
    )
}

export default PopTelCaro;