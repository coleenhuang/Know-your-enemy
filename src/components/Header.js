import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <h1>Know Your Enemy</h1>
      </Link>
    </header>
  )
}

export default Header;
