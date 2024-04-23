import React from 'react'
import UpcomTam from '../TamilList/UpcomTam'
import UpcomingEng from '../EnglishList/UpcomingEng'
import UpcomingMal from '../MalayalamList/UpcomingMal'
import UpcomingHind from '../HindiList/UpcomingHind'
import UpcomTel from '../TeluguList/UpcomTel'


const Upcoming = () => {
  return (
    <div>
        <UpcomTam/>
        <UpcomingEng/>
        <UpcomingMal/>
        <UpcomingHind/>
      <UpcomTel/>
      
    </div>
  )
}

export default Upcoming;