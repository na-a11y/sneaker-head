import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import '../styles/Header.css';

const Header = ({ cartQuantity }) => {
  return (
    <header className="header-container">
      <div className="logo">
        <Link to="/">Sneakerhead</Link>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <button className="cart-icon">
        <FaShoppingCart size={20} />
        {cartQuantity > 0 && <span className="cart-quantity">{cartQuantity}</span>}
      </button>
    </header>
  );
};

export default Header;
