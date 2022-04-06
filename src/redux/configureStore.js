import { combineReducers, createStore } from 'redux';
import bookReducre from './books/books';
import catagoryReducer from './catagories/catagories';

const rootReducer = combineReducers({
  books: bookReducre,
  catagories: catagoryReducer,
});

const store = createStore(rootReducer);
export default store;
