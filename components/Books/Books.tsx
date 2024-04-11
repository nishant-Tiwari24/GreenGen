import React from 'react';
import Card from './Card';
import Header from '../Header';

const Books: React.FC = () => {
  const bookData = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      coverImage: "./book.png"
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      coverImage: "./book.png"
    },
    {
      title: "To Kill a Mockingbird",
      author: "George Orwell",
      coverImage: "./book.png"
    }
  ];

  return (
    <>
    <Header/>
    <div className='flex flex-col justify-center items-center -m-8'>
      <div className='w-full h-screen flex justify-center gap-16 items-center'>
        {bookData.map((book, index) => (
          <Card key={index} book={book} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Books;
