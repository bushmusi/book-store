import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/catagories/catagories';

const Catagory = () => {
  const res = useSelector((state) => state.catagories);
  const dispatch = useDispatch();
  return (
    <div>
      <span>{res}</span>
      <button type="button" style={{ border: '1px solid black', backgroundColor: 'whitesmoke' }} onClick={() => dispatch(checkStatus())}>Check Status</button>
    </div>
  );
};

export default Catagory;
