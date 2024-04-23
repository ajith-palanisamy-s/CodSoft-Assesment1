import React from 'react'


import PopTam from '../TamilList/PopTam'
import RevenueTam from '../TamilList/RevenueTam'
import UpcomTam from '../TamilList/UpcomTam'
import VoteTam from '../TamilList/VoteTam'
import PopTamCaro from '../TamilList/PopTamCaro'
import Folder from './Folder'


const TAMIL = () => {
  return (
    <div > 
        <RevenueTam/>
  <PopTamCaro/> 
      <PopTam/>
      
      <UpcomTam/>
      <VoteTam/>
      <Folder/>
    </div>
  )
}

export default TAMIL

