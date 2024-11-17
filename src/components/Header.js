// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-2xl font-bold">My E-comm Site</h1>
      <nav className="mt-2">
        <Link to="/" className="mr-4 hover:text-yellow-300">Home</Link>
        <Link to="/cart" className="hover:text-yellow-300">Cart</Link>
      </nav>
    </header>
  );
};

export default Header;
