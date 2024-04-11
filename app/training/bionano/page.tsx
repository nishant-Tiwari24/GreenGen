import React from 'react';
import Header from '@/components/Header';

const content = [
  {
    title: 'Bio-nano Technology',
    description: "Study the fundamentals of electron beam interaction with specimens to accomplish high-resolution imaging and image analysis for varied material types. Explore the foundations of electron transmission through thin material for atomic-scale imaging. Gain hands-on experience in specimen preparation and image interpretation for detailed structural analysis. Grasp the science behind XRD and its application in determining crystal structures and phases. Learn strategies for sample preparation, data collecting, and analysis to identify and quantify crystalline minerals. Delve into the fundamentals of DLS for assessing particle size distributions in suspensions. Cover a spectrum of spectroscopic techniques, including UV-Visible. Understand how spectroscopy provides insights on molecule structures, chemical compositions, and electronic transitions."
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
