import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';
import userImage from '../../images/user.png';

const links = [
  {
    id: 1,
    path: '/book',
    name: 'Book',
  },
  {
    id: 2,
    path: '/catagory',
    name: 'Catagory',
  },
];

const Header = () => (
  <header className="App-header">
    <h1>
      <NavLink to="/" className="logoName">BOOK STORE CMS</NavLink>
    </h1>
    <nav>
      <ul>
        {
          links.map((item) => (
            <li key={item.id}>
              <NavLink to={item.path} exact="true">{item.name}</NavLink>
            </li>
          ))
        }
      </ul>
      <img src={userImage} alt="user avator" className="userImage" />
    </nav>
  </header>
);

export default Header;
