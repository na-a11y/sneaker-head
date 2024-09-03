import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import '../styles/Header.css';

const Header = ({ cartQuantity }) => {
  return (
    <header className="header-container">
      <div className="logo">
        <Link to="/"><img src="https://sneakerank-store-newdemo.myshopify.com/cdn/shop/files/sneakerank_logo.png?v=1717655658&width=150"></img></Link>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Link to="/cart" className="cart-icon">
        <FaShoppingCart size={20} />
        {cartQuantity > 0 && <span className="cart-quantity">{cartQuantity}</span>}
      </Link>
    </header>
  );
};

export default Header;
