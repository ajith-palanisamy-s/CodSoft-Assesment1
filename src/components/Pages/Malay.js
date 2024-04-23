import React from 'react'
import PopMal from '../MalayalamList/PopMal'
import PopMalCaro from '../MalayalamList/PopMalCaro'
import RevenueMal from '../MalayalamList/RevenueMal'
import UpcomingMal from '../MalayalamList/UpcomingMal'
import VoteMal from '../MalayalamList/VoteMal'
import { Folder } from 'react-bootstrap-icons'

const Malay = () => {
  return (
    <div>
    
    <PopMalCaro/>
    <RevenueMal/>
    <PopMal/>
    <UpcomingMal/>
    <VoteMal/>
    <Folder/>

    </div>
  )
}

export default Malay
