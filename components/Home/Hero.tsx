import Head from 'next/head';
import Header from '../Header';

const HeroPage: React.FC = () => {
  return (
      <div className="min-h-screen w-full flex-col flex justify-center">
        <div className="text-center text-white -mt-20 z-10">
          <h1 className="text-4xl lg:text-7xl font-bold">GREEN GEN SCIENCE SOLUTIONS</h1>
          <p className="text-lg lg:text-2xl text-green-400 font-bold mt-4">LETS THRIVE TO  LIVE  IN  HARMONY  WITH  NATURE</p>
        </div>
      </div>
  );
};

export default HeroPage;
