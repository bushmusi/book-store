import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';

const BookList = () => {
  const bookList = useSelector((state) => state.books);
  return (
    <>
      <ul className="bookList">
        {
            bookList.map((item) => (
              <li key={item.id}>
                <Book
                  title={item.title}
                  author={item.author}
                  id={item.id}
                />
              </li>
            ))
          }
      </ul>
      <BookForm />
    </>
  );
};

export default BookList;
