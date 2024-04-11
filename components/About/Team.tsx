import React from 'react'
import Right from './Right'
import Header from '../Header'
import RightTeam from './RightTeam'
import LeftTeam from './LeftTeam'

const Team = () => {
  return (
    <>
    <Header/>
    <div className='w-screen min-h-screen flex flex-row justify-around'>
    
      <LeftTeam/>
      <div>
      <div className="flex gap-10 justify-center mr-14">
        <RightTeam/>
        <RightTeam/>
        <RightTeam/>
      </div>
      <div className="flex gap-10 justify-center mr-14">
        <RightTeam/>
        <RightTeam/>
        <RightTeam/>
      </div>
      </div>
    </div>
    </>
  )
}

export default Team
