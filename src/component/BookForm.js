import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/books/books';

export default function BookForm() {
  const dispatch = useDispatch();

  function addBookItem(e) {
    const form = document.querySelector('form');
    e.preventDefault();
    const title = e.target[0].value;
    const author = e.target[1].value;
    const category = e.target[2].value;
    const id = uuid();
    dispatch(addBook({
      title, author, category, item_id: id,
    }));
    form.reset();
  }

  return (
    <form onSubmit={addBookItem}>
      <div className="mainBox">
        <h2>ADD NEW BOOK</h2>
        <div className="inputCont">
          <input type="text" name="title" placeholder="Please write book title..." required />
          <input type="text" name="author" placeholder="Please write book author..." required />
          <input type="text" name="category" placeholder="Please write category..." required />
          <input type="submit" value="Submit" />
        </div>
      </div>
    </form>
  );
}
