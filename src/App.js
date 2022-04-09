import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './component/header/Header';
import BookList from './component/book-list/BookList';
import Catagory from './component/category-page/Catagory';

function App() {
  return (

    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/book" element={<BookList />} />
          <Route path="/catagory" element={<Catagory />} />
          <Route path="/" exact="true" element={<BookList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
