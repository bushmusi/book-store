import React from 'react';
import Book from './Book';
import BookForm from './BookForm';

const BookList = () => (
  <>
    <ul className="bookList">
      <li>
        <Book />
      </li>
    </ul>
    <BookForm />
  </>
);

export default BookList;
