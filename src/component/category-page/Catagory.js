import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './category.scss';
import { checkStatusSuccess } from '../../redux/catagories/catagories';

const Catagory = () => {
  const res = useSelector((state) => state.catagoryReducer);
  const dispatch = useDispatch();
  return (
    <div className="catagoryContainer">
      <button type="button" onClick={() => dispatch(checkStatusSuccess())}>Check Status</button>
      <span>{res}</span>
    </div>
  );
};

export default Catagory;
