import React, {useEffect, useState} from "react"
import '../Styles/MoviePop.css';
import { useParams } from "react-router-dom"
import Cards from "../Card/Card"

const PopTel = () => {
    
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_original_language=te `)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }
 
    return (
        <div className="movie__list">
            { <h2 className="list__title" >{(type ? type : "|> Trending telugu MOVIES").toUpperCase()}</h2> }
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default PopTel;
