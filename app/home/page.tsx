import Header from '@/components/Header';
import React from 'react';

const Page = () => {
  return (
    <div>
        <Header/>
      <div className="hero relative min-h-screen w-full flex-col flex justify-center">
        <div className="text-center text-white -mt-24 z-10 relative">
          <p className="text-2xl lg:text-5xl px-16 text-white">
            We are a global, research-driven, environmentally focused sustainable solutions company. We are determined to transform the future of <br />
            <span className="italic">"harmonious co-living with environment"</span><br />
            by exploiting sustainable means without hampering the<br />
            <span className="italic">"fellow plants and beings."</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
