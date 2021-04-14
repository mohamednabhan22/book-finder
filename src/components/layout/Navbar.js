import React from 'react';
import { Link } from 'react-router-dom';

const navStyle = {
  display: 'flex',
  justifyContenet: 'spaceBetween'
};
const Navbar = () => {
  return (
    <nav className={`navbar navbar-dark bg-dark mb-5`} style={navStyle}>
      <Link to="/">
        <span className="navbar-brand mb-0 h1  fas fa-book-open">
          {' '}
          Book Finder
        </span>
      </Link>
      <Link to="/favoriteList">
        <span className="navbar-brand mb-0 h1  fas fa-bookmark">
          {' '}
         Favorite List
        </span>
      </Link>
    </nav>
  );
};
// const navStyle = {
//   backgroundColor: '#e3f2fd'
// };
export default Navbar;
