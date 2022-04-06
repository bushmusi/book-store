import { v4 as uuid } from 'uuid';

const ADD = 'bookstore/books/ADD_BOOK';
const REMOVE = 'bookstore/books/REMOVE_BOOK';

const initBooks = [
  {
    id: uuid(),
    catagory: 'Romans',
    title: 'The Love tricks',
    author: 'Thomas J',
  },
  {
    id: uuid(),
    catagory: 'Physchology',
    title: 'Road to happiness',
    author: 'Erikson P',
  },
];

export default function reducer(state = initBooks, action = { type: null }) {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE:
    {
      const { id } = action;
      return state.filter((item) => item.id !== id);
    }
    default:
      return state;
  }
}

export function addBook(obj) {
  return {
    type: ADD,
    payload: obj,
  };
}

export function removeBook(id) {
  console.log(`From action creator${id}`);
  return {
    type: REMOVE,
    id,
  };
}
