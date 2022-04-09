const STATUS = 'bookstore/catatgories/STATUS';

export default function reducer(state = '', action = { type: null }) {
  switch (action.type) {
    case STATUS:
      return 'Under Construction';
    default: return state;
  }
}

function checkStatus() {
  return {
    type: STATUS,
  };
}

export const checkStatusSuccess = () => (dispatch) => {
  dispatch(checkStatus());
};
