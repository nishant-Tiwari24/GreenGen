import React from 'react';

interface CircleProps {
  circle: {
    title: string;
    link: string;
  };
}

const Circle: React.FC<CircleProps> = ({ circle }) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="w-[300px] h-[300px] bg-green-600 rounded-full flex items-center justify-center mb-4 text-black text-2xl font-semibold text-center px-5">
        <a href={circle.link} className='hover:underline '>
        {circle.title}
      </a>
      </div>
      
    </div>
  );
};

export default Circle;
