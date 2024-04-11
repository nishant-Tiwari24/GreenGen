import React from 'react';
import Header from '../Header';
import Left from './Left';
import Right from './Right';

const Internship = () => {
  return (
    <>
    <Header/>
    <h1 className='text-white w-[100vw] text-6xl ml-20 mt-8 mb-8'>Internship</h1>
    <div className="h-full flex justify-around ml-10">
      <Left/>
      <div className='w-1 bg-green-400 h-screen/2'></div>
      <Right/>
    </div>
    </>
  );
};

export default Internship;
