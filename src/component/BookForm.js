import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/books/books';

export default function BookForm() {
  const dispatch = useDispatch();

  function addBookItem(e) {
    const form = document.querySelector('form');
    e.preventDefault();
    console.log(e);
    const title = e.target[0].value;
    const author = e.target[1].value;
    const catagory = e.target[2].value;
    const id = uuid();
    dispatch(addBook({
      title, author, catagory, id,
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
          <input type="text" name="catagory" placeholder="Please write catagory..." required />
          <input type="submit" value="Submit" />
        </div>
      </div>
    </form>
  );
}
