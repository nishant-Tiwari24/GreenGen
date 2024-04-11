import React from 'react';
import Header from '@/components/Header';

const content = [
  {
    title: 'Cell biology',
    description: "Exploring methodologies for obtaining high-quality cells from various sources, including tissue samples and established cell cultures. Gain expertise in modern techniques for the separation, refinement, and analysis of various cell populations. Explore the intricacies of cell culture, encompassing subjects such as media formulation, aseptic techniques, and optimal cell proliferation settings. Acquire proficiency in the techniques of cell passaging, sub-culturing, and maintaining cell lines for extended periods of time to facilitate longterm studies. Develop expertise in performing assays to assess the viability, apoptosis, and other techniques for evaluating the effects of different chemicals on cellular wellbeing. Build up the knowledge and skills necessary to acquire and analyze images in order to accurately see and comprehend cellular structures."
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
          <p className="ml-8 mt-4 text-5xl font-light text-white">{item.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Page;
