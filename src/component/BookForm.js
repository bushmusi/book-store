import React from 'react';

const BookForm = () => (
  <form>
    <div className="mainBox">
      <h2>ADD NEW BOOK</h2>
      <div className="inputCont">
        <input type="text" placeholder="Please write book title..." />
        <input type="text" placeholder="Please write book author..." />
        <input type="submit" value="Submit" />
      </div>
    </div>
  </form>
);

export default BookForm;
