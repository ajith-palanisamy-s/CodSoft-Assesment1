import React from 'react'
import PopTel from '../TeluguList/PopTel'
import PopTelCaro from '../TeluguList/PopTelCaro'
import RevenueTel from '../TeluguList/RevenueTel'
import UpcomTel from '../TeluguList/UpcomTel'
import VoteTel from '../TeluguList/VoteTel'
import { Folder } from 'react-bootstrap-icons'

const Telugu = () => {
  return (
    <div>
      <PopTel/>
      <PopTelCaro/>
      <RevenueTel/>
      <UpcomTel/>
      <VoteTel/>
      <Folder/>

    </div>
  )
}

export default Telugu
