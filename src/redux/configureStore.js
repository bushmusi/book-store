import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import bookReducre, { fetchBooks } from './books/books';
import catagoryReducer from './catagories/catagories';

const rootReducer = combineReducers({
  bookReducre,
  catagoryReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(fetchBooks());
export default store;
