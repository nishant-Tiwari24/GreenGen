import React from 'react';
import Header from '@/components/Header';

const content = [
    {
        title: 'Protein Biochemistry',
        description: "1. Chromatography in Protein Biochemistry: Explore the theory underlying several chromatographic techniques, including affinity chromatography, ion exchange chromatography, size exclusion chromatography, and high-performance liquid chromatography. Learn the nuances of creating robust chromatographic techniques for effective protein separation and purification. Gain hands-on experience in packing chromatography columns, diagnosing common difficulties, and maintaining optimal column performance. 2. Centrifugation in Protein Biochemistry: Understand the fundamentals of centrifugation, including differential centrifugation, density gradient centrifugation, and ultracentrifugation. Learn appropriate sample preparation strategies for effective protein extraction and separation. Gain practical insights on selecting the optimum rotor for diverse purposes and operating centrifuges for maximum efficiency."
      },
];

const Page = () => {
  return (
    <div className='min-h-screen'>
    <Header />
    <div className='h-full flex flex-col justify-start mt-4'>
      
      {content.map((item, index) => (
        <div key={index} className="p-4 mt-8">
          <h1 className="ml-8 text-6xl text-white underline font-bold">{item.title}</h1>
          <p className="ml-8 mt-4 text-5xl font-light text-white">{item.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Page;
