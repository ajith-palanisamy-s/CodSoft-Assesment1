import React from 'react'
import RevenueTam from '../TamilList/RevenueTam'
import RevenueEng from '../EnglishList/RevenueEng'
import RevenueMal from '../MalayalamList/RevenueMal'
import RevenueHind from '../HindiList/RevenueHind'
import RevenueTel from '../TeluguList/RevenueTel'

const Blockbuster = () => {
  return (
    <div>
        <RevenueTam/>
        <RevenueEng/>
        <RevenueMal/>
        <RevenueHind/>
        <RevenueTel/>
      
    </div>
  )
}

export default Blockbuster
