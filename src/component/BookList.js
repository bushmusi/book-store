import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';

const BookList = () => {
  const bookList = useSelector((state) => state.bookReducre.books);
  return (
    <>
      <ul className="bookList">
        {
          Object.entries(bookList).map((val) => (
            <li key={val[0]}>
              <Book
                title={val[1][0].title}
                author={val[1][0].author}
                category={val[1][0].category}
                id={val[0]}
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
