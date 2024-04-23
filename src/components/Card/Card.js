import React, {useEffect, useState} from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import '../Card/Card.css';
import { Link } from "react-router-dom"



const Cards = ({movie}) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, []) 
 
 
    return <>
  
      
    {
          
        isLoading
        ?
        <div className="cards">
            <SkeletonTheme color="pink" highlightColor="#8B0000">
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
        </div>
        :
        <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
          
          <div className="cards">
       
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} alt="comming soon..."/>
               
              
                <div className="cards__overlay">
                   
                
                    <div className="cardtitle">{movie?movie.vote_average:""}</div>
                    <div className="cardtitle">{movie?movie.title:""}</div>

                </div>
            </div>
        </Link>
    }
  
    </>
}

export default Cards