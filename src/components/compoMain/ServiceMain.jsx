// eslint-disable-next-line no-unused-vars
import React from 'react'

import Website from '../ServiceWeb'
import AI from '../ServiceAI'
import Blockchain from '../ServiceBC'
// import Process from "../Process"

const ServiceMain = () => {
  return (
        <>
        {/* <Process /> */}
        <Website/>
        <AI/>
        <Blockchain/>
        </>
  )
}

export default ServiceMain