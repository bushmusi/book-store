import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { removeBook } from '../../redux/books/books';

const Book = (props) => {
  const paragraphStyle = {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    color: 'rgb(18 18 18 / 49%)',
  };

  const dispatch = useDispatch();

  const {
    title, author, id, category,
  } = props;

  const removeItem = (id) => {
    dispatch(removeBook(id));
  };
  const percentage = 0;
  return (
    <div className="bookItem">
      <div className="leftInfo">
        <p style={paragraphStyle}>{category}</p>
        <div className="titleAuthor">
          <h2>{title}</h2>
          <span>{author}</span>
        </div>
        <div className="actionBtn">
          <input type="button" value="Comment" />
          <input type="button" value="Remove" onClick={() => removeItem(id)} />
          <input type="button" value="Edit" />
        </div>
      </div>
      <div className="rightInfo">
        <div className="percentIndicator">
          <div style={{ width: 75, height: 75 }}>
            <CircularProgressbar value={percentage || 0} text={`${percentage || 0}%`} />
          </div>
          <div className="perecenDetail">
            <span style={{ color: 'black' }}>{`${percentage}%`}</span>
            <p style={{ color: '#00000080' }}>Completed</p>
          </div>
        </div>
        <div className="Line-2" />
        <div className="currentChapter">
          <div>
            <span style={{ color: '#e8e8e8' }}>CURRENT CHAPTER</span>
            <span style={{ color: '#121212', fontWeight: '300' }}>Chapter 17</span>
          </div>
          <input type="button" value="UPDATE PROGRESS" />
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Book;
