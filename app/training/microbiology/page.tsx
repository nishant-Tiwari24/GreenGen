import React from 'react';
import Header from '@/components/Header';

const content = [
  {
    title: 'Microbiology',
    description: "Examine a range of sterilization techniques, such as autoclaving, filtration, and chemical disinfection. Comprehend the fundamental concepts of aseptic technique and acquire the knowledge necessary to sustain a sterile working environment. Master the skill of creating culture media tailored to various cell types, such as bacteria, yeast, and mammalian cells. Acquire knowledge on choosing suitable components, fine-tuning pH levels, and sterilizing media to promote the best possible cell proliferation. Learn advanced techniques for isolating master cells to obtain highly pure cell populations from intricate sources. Assess methodologies such as streak plate, pour plate, and spread plate to analyze different types of cells. Explore the realm of cell staining, with an emphasis on applications for both living and preserved cells."
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
