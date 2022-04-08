import axios from 'axios';

const ADD = 'bookstore/books/ADD_BOOK';
const REMOVE = 'bookstore/books/REMOVE_BOOK';
const FETCH_BOOOK_REQUEST = 'bookstore/books/FETCH_BOOK_REQUEST';
const FETCH_BOOK_SUCCESS = 'bookstore/books/FETCH_BOOK_SUCCESS';
const FETCH_BOOK_FAILURE = 'boookstore/books/FETCH_BOOK_FAILURE';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/oGVfyJj7iHzup49tuxcW/books';

const initBookState = {
  loading: false,
  books: {},
  error: '',
};

const fetchBookRequest = () => ({
  type: FETCH_BOOOK_REQUEST,
});

const fetchBookSuccess = (data) => ({
  type: FETCH_BOOK_SUCCESS,
  payload: data,
}
);

const fetchBookFailure = (error) => ({
  type: FETCH_BOOK_FAILURE,
  payload: error,
});

const removeBookSuccess = () => ({
  type: REMOVE,
}
);

const addBookSuccess = () => ({
  type: ADD,
});

export default function reducer(state = initBookState, action = { type: null }) {
  switch (action.type) {
    case FETCH_BOOOK_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
        books: {},
      };
    case FETCH_BOOK_SUCCESS:
      return {
        ...state,
        loading: false,
        books: action.payload,
        error: 'no error',
      };
    case FETCH_BOOK_FAILURE:
      return {
        ...state,
        loading: false,
        books: {},
        error: action.payload,
      };
    case ADD:
      return {
        ...state,
        error: '',
        loading: true,
      };
    case REMOVE:
      return {
        ...state,
        loading: true,
        error: '',
      };
    default:
      return {
        ...state,
        error: '',
      };
  }
}

export const fetchBooks = () => (dispatch) => {
  dispatch(fetchBookRequest());
  axios.get(BASE_URL).then((response) => {
    dispatch(fetchBookSuccess(response.data));
  })
    .catch((err) => {
      dispatch(fetchBookFailure(err.message));
    });
};

export const addBook = (obj) => (dispatch) => {
  axios.post(`${BASE_URL}`, obj).then(() => {
    dispatch(addBookSuccess());
    dispatch(fetchBooks());
  }).catch((err) => {
    console.log(err);
  });
};

export const removeBook = (id) => (dispatch) => {
  axios.delete(`${BASE_URL}/${id}`).then(
    () => {
      dispatch(removeBookSuccess());
      dispatch(fetchBooks());
    },
  ).catch((err) => {
    console.log(err);
  });
};
