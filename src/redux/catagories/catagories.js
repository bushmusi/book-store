const STATUS = 'bookstore/catatgories/STATUS';
const CATAGORIES = 'bookstore/catagories/CATAGORIES';

const initialCatagories = [];

export default function reducer(state = initialCatagories, action = { type: null }) {
  switch (action.type) {
    case STATUS:
      return 'Under Construction';
    case CATAGORIES:
      return [...state, action.payload];
    default: return state;
  }
}

export function createCatagory(data) {
  return {
    type: CATAGORIES,
    payload: data,
  };
}

export function checkStatus() {
  return {
    type: STATUS,
  };
}
