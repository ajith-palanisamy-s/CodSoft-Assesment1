import React, {useEffect, useState} from "react"
import '../Styles/MoviePop.css';
import { useParams } from "react-router-dom"
import Cards from "../Card/Card"
import PeopleCard from "../Card/PeopleCard";

const New = () => {
    
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`
        https://api.themoviedb.org/3/person/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=ta&page=2

        `)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }
 
    return (
        <div className="movie__list">
            { <h2 className="list__title">{(type ? type : "|>  ENGLISH MOVIES").toUpperCase()}</h2> }
            <div className="list__cards">
                {
                    movieList.map(moviee => (
                        <PeopleCard moviee={moviee} />
                    ))
                }
            </div>
        </div>
    )
}

export default New;
