import React from 'react';
import Header from '@/components/Header';

const content = [
  {
    title: 'Molecular Biology',
    description: "Embark on a revolutionary journey into the world of molecular biology with our specialist course created for students, researchers, and professionals. This hands-on training focuses on understanding key procedures like as DNA transformation and transfection, Polymerase Chain Reaction (PCR), electrophoresis, and gel documentation. Participants will delve into the nuances of genetic manipulation, learning to optimize circumstances for successful transformations. The breakthrough PCR technology will be demystified, enabling for the design, optimization, and troubleshooting of reactions vital in genotyping, gene expression research, and cloning. Hands-on expertise with electrophoresis procedures, including gel preparation and staining, will be complimented by understanding gel documentation systems. Join us to obtain practical skills and theoretical insights, equipping you to confidently employ these vital molecular biology techniques in your research and contribute to scientific progress."
  },
];

const Page = () => {
  return (
    <div className='min-h-screen'>
    <Header />
    <div className='h-full flex flex-col justify-start mt-4'>
      
      {content.map((item, index) => (
        <div key={index} className="p-4 mt-8">
          <h1 className="ml-8 text-5xl text-white underline font-bold">{item.title}</h1>
          <p className="ml-8 mt-4 text-5xl font-light text-white">{item.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Page;
