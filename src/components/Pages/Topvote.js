import React from 'react'
import VoteTam from '../TamilList/VoteTam'
import VoteEng from '../EnglishList/VoteEng'
import VoteMal from '../MalayalamList/VoteMal'
import VoteHind from '../HindiList/VoteHind'
import VoteTel from '../TeluguList/VoteTel'

const Topvote = () => {
  return (
    <div>
      <VoteTam/>
      <VoteEng/>
      <VoteMal/>
      <VoteHind/>
      <VoteTel/>
    </div>
  )
}

export default Topvote
