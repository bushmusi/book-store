import React from 'react';

const Book = () => (
  <div className="bookItem">
    <div>
      <h1>Book Title 1</h1>
      <i>Author 1</i>
    </div>
    <input type="button" value="Delete" style={{ width: '90px' }} />
  </div>
);

export default Book;
