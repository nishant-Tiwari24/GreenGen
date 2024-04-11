import React from 'react';
import Header from '../Header';

interface Book {
  title: string;
  author: string;
  coverImage: string;
}

const Card: React.FC<{ book: Book }> = ({ book }) => {
  return (
    
    <div className="flex flex-col items-center justify-center h-screen">
      <div className={`border-green-500 border-2 rounded-lg text-white p-4 flex flex-col items-center `}>
        <img src={book.coverImage} alt={book.title} className="w-64 h-96 mb-2" />
      </div>
      <div className="text-center text-white mt-4">
          <p className="text-lg font-semibold mb-1">{book.title}</p>
          <p className="text-sm">{book.author}</p>
        </div>
    </div>
  );
};

export default Card;
