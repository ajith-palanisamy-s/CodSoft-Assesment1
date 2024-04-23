import React, { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link } from 'react-router-dom';



const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
      setTimeout(() => {
          setIsLoading(false)
      }, 1500)
  }, []) 


  return <> 
  {
        
    //   isLoading
    //   ?
    //   <div className="cards">
    //       <SkeletonTheme color="pink" highlightColor="#8B0000">
    //           <Skeleton height={300} duration={2} />
    //       </SkeletonTheme>
    //   </div>
    //   :
    //   <Link to={'/Moviee'} style={{textDecoration:"none", color:"white"}}>
        
          

    //     <div className="cards">
    //     <img  className="cards__img" src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt="soon"/>
   

  
        
    //     <div className="cards__overlay">
    //     <div className="card__title">{Title}</div>
   
    //   </div>
  
              
    //   </div>  
    //   </Link>
  }

 </>
 
 
}

export default MovieCard;
