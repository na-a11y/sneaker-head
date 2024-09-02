import React from 'react';
import '../styles/Shop.css';// Ensure you have this CSS file

const shoes = [
  {
    id: 1,
    name: "Batman: The Dark Knight 2.0",
    price: 3299,
    img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1708668453_6608407.gif?format=webp&w=480&dpr=1.3",
  },
  {
    id: 2,
    name: "Urban Blaze: Denim",
    price: 2499,
    img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1722523822_2707220.jpg?format=webp&w=300&dpr=1.3",
  },
  {
    id: 3,
    name: "Urban Blaze: Lavender",
    price: 2499,
    img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1702568686_7854449.jpg?format=webp&w=300&dpr=1.3",
  },
  {
    id: 4,
    name: "All Day Classics: Dune",
    price: 2299,
    img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1716621220_6811161.jpg?format=webp&w=300&dpr=1.3",
  },
  {
    id: 5,
    name: "Urban Blaze: Mafia",
    price: 2499,
    img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1719591512_6350004.jpg?format=webp&w=300&dpr=1.3",
  },
  {
    id: 6,
    name: "Naruto: Split Sneakers",
    price: 2699,
    img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1718090174_1791817.jpg?format=webp&w=300&dpr=1.3",
  },
  {
    id: 7,
    name: "TSS Originals: Meadows",
    price: 2569,
    img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710489207_5387436.jpg?format=webp&w=300&dpr=1.3",
  },
 
  {
    id: 10,
    name: "Stitched Together: Vol 1",
    price: 3999,
    img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1713851299_3614820.jpg?format=webp&w=300&dpr=1.3",
  },
  {
    id: 11,
    name: "Urban Blaze: Underwater",
    price: 2499,
    img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1717244847_8302434.jpg?format=webp&w=300&dpr=1.3",
  },
  {
    id: 12,
    name: "Superman: Man Of Steel",
    price: 2699,
    img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1694689639_5944281.jpg?format=webp&w=300&dpr=1.3",
  },
  {
    id: 13,
    name: "TSS Originals: Ignite",
    price: 2299,
    img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1709705663_3622765.jpg?format=webp&w=480&dpr=1.3",
  },
  {
    id: 14,
    name: "Urban Blaze: Mafia",
    price: 2699,
    img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1712145476_1098316.jpg?format=webp&w=480&dpr=1.3",
  }
];

const Shop = ({ addToCart }) => {
  return (
    <div className="shop">
      <h1 className="shop-title">Our Shoe Collection</h1>
      <div className="shoe-list">
        {shoes.map((shoe) => (
          <div key={shoe.id} className="shoe-card">
            <img src={shoe.img} alt={shoe.name} className="shoe-img" />
            <div className="shoe-info">
              <h2 className="shoe-name">{shoe.name}</h2>
              <p className="shoe-price">₹{shoe.price}</p>
              <button className="add-to-cart" onClick={() => addToCart(shoe)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
