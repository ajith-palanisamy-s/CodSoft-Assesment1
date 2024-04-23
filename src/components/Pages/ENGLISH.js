
import React from 'react'


import PopEngCaro from '../EnglishList/PopEngCaro';
import PopEng from '../EnglishList/PopEng';
import UpcomingEng from '../EnglishList/UpcomingEng';
import VoteEng from '../EnglishList/VoteEng';
import RevenueEng from '../EnglishList/RevenueEng';
import { Folder } from 'react-bootstrap-icons';



const ENGLISH = () => {
  return (
    <div>
  
         <PopEngCaro/> 
       <PopEng/>
      <RevenueEng/>
      <UpcomingEng/>
      <VoteEng/>
      <Folder/>

 
     
       
    </div>
  )
}

export default ENGLISH;
