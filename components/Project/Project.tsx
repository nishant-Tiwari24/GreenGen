import React from 'react';
import Header from '../Header';

const CapstoneProjectInfo: React.FC = () => {
  return (
    <>
    <Header/>
    <div className="h-full text-white flex flex-col mt-28 items-start ml-16 overflow-x-hidden">
      <h1 className="text-6xl mb-6 underline">Capstone Project</h1>
      <div className="text-5xl text-green-300 mb-4 mt-10">
        <h2>Eligibility:</h2>
          <p className="text-4xl font-light text-green-400">B.tech <span className='text-white'>- Biotechnology/Nanotechnology</span></p>
          <p className="text-4xl font-light text-green-400">M.tech- <span className='text-white'>- Biotechnology/Nanotechnology</span></p>
          <p className="text-4xl font-light text-green-400">Interdisciplinary- <span className='text-white'>- Biotechnology/Nanotechnology/Lifesciences</span></p>
      </div>
      <div className="text-lg mt-4">
        <h2 className='text-5xl text-green-300'>Outcomes:</h2>
        <ul className='text-4xl font-light text-white'>
          <li>Hands on experience</li>
          <li>Independent project</li>
          <li>Valuable Certificate</li>
          <li>Letter of recommendation</li>
          <li>Career guidance</li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default CapstoneProjectInfo;
