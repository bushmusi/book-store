import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { title, author, id } = props;
  const dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div className="bookItem">
      <div>
        <h1>{title}</h1>
        <i>{author}</i>
      </div>
      <input type="button" id={id} style={{ width: '90px' }} value="Delete" onClick={() => removeItem(id)} />
    </div>
  );
};

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Book;
