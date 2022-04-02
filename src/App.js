import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './component/Header';
import BookList from './component/BookList';
import Catagory from './component/Catagory';

function App() {
  return (

    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/book" element={<BookList />} />
          <Route path="/catagory" element={<Catagory />} />
          <Route path="/" element={<BookList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
