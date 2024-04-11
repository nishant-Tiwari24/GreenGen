import React from 'react';

const LeftTeam: React.FC = () => {
  return (
    <div className='w-2/3 flex flex-col justify-center items-center -mt-16'>
        <h1 className='text-center text-white text-4xl mb-10'>Founder and Director</h1>
      <div className='bg-green-500  opacity-90 w-[500px] h-[500px] border-2 border-transparent rounded-full flex justify-center items-center'>
        <div className='bg-white  opacity-90 w-[400px] h-[400px] border-2 border-transparent rounded-full flex justify-center items-center'>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center text-white text-2xl mt-10">
        <p>Dr. Anil K. Suresh, Ph.D., RLF</p>
        <p>Associate Professor</p>
        <p>Department of Biological Sciences</p>
        <p>SRM University- AP, Amaravati- 522503</p>
      </div>
    </div>
  );
};

export default LeftTeam;

