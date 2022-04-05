import { combineReducers, createStore } from 'react-redux';
import bookReducre from './books/books';
import catagoryReducer from './catagories/catagories';

const rootReducer = combineReducers({
  reducer: [bookReducre, catagoryReducer],
});

const store = createStore(rootReducer);

store.subcribe(() => console.log(store.getState()));
