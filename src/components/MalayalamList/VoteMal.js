import React, {useEffect, useState} from "react"
import '../Styles/MoviePop.css';
import { useParams } from "react-router-dom"
import Cards from "../Card/Card"

const VoteMal = () => {
    
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&page=1&sort_by=vote_count.desc&with_original_language=ml`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }
 
    return (
        <div className="movie__list">
            { <h2 className="list__title">{(type ? type : "|> top-ranked malayalam movies").toUpperCase()}</h2> }
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

export default VoteMal;