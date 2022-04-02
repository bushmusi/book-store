import React from 'react';
import { NavLink } from 'react-router-dom';

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
      <NavLink to="/">BOOK STORE CMS</NavLink>
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
    </nav>
  </header>
);

export default Header;
