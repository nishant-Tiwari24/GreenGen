import React from 'react';
import Header from '@/components/Header';

const content = [
  {
    title: 'Cancer Theranostics',
    description: "Embark on a detailed examination of molecular biology essentials with this revolutionary course. Begin with a deep dive into DNA fundamentals, uncovering its structure, function, and role as life's genetic blueprint. Master the fundamentals of DNA replication assuring the faithful transmission of genetic information. Unlock the mysteries of genetic manipulation through transformation and transfection procedures, vital for molecular biology and genetic engineering. Delve into the innovative world of Polymerase Chain Reaction (PCR), developing proficiency in amplifying specific DNA sequences for purposes ranging from diagnostics to cloning. Explore electrophoresis techniques for isolating and analyzing biomolecules, developing practical skills in gel electrophoresis. Learn the skill of gel documenting systems, understanding UV light's role in viewing DNA bands. By the course's end, participants will possess a flexible skill set, permitting them to utilize these approaches in their research and contribute meaningfully to the area of molecular biology. Join us in this transformative journey to broaden your molecular biology toolset and understand life's mysteries at the molecular level."
  }
];

const Page = () => {
  return (
    <div className='min-h-screen'>
    <Header />
    <div className='h-full flex flex-col justify-start mt-4'>
      
      {content.map((item, index) => (
        <div key={index} className="p-4 mt-8">
          <h1 className="ml-8 text-6xl text-white underline font-bold">{item.title}</h1>
          <p className="ml-8 mt-4 text-4xl font-light text-white">{item.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Page;
