import React from 'react'
import Left from './Left'
import Right from './Right'
import Header from '../Header'

function Aboutpage() {
  return (
    <>
    <Header/>
    <div className='w-screen min-h-screen flex flex-row'>
      <Left/>
      <Right/>
    </div>
    </>
  )
}

export default Aboutpage
