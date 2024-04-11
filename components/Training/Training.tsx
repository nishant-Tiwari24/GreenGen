import React from 'react';
import Circle from './Circle';
import Header from '../Header';

const trainingData = [
  [
    { title: "CELL BIOLOGY", link: "/training/cellbiology" },
    { title: "BIO-NANO TECHNOLOGY", link: "/training/bionano" },
    { title: "MOLECULAR  BIOLOGY", link: "/training/molecularbiology" }
  ],
  [
    { title: "MICRO BIOLOGY", link: "/training/microbiology" },
    { title: "CANCER THERANOSTICS", link: "/training/cancertheranostics" },
    { title: "PROTIEN BIOCHEMISTRY", link: "/training/protienbiochemistry" }
  ]
];

const Training = () => {
  return (
    <>
    <Header/>
    <h1 className='text-white text-4xl ml-20 mt-8 mb-8'>Hands on Training</h1>
    <div className="w-screen mt-10 h-full flex flex-wrap justify-center gap-10">
      {trainingData.map((group, index) => (
        <div key={index} className="flex flex-wrap justify-around gap-10">
          {group.map((circle, idx) => (
            <Circle key={idx} circle={circle} />
          ))}
        </div>
      ))}
    </div>
    </>
  );
};

export default Training;
