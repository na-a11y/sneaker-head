import React from 'react';
import '../styles/Shop.css';// Ensure you have this CSS file

const shoes = [
  {
    id: 1,
    name: "Shoe 1",
    price: 50,
    img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1708668453_6608407.gif?format=webp&w=480&dpr=1.3",
  },
  {
    id: 2,
    name: "Shoe 2",
    price: 60,
    img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1722523822_2707220.jpg?format=webp&w=300&dpr=1.3",
  },
  {
    id: 3,
    name: "Shoe 3",
    price: 70,
    img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1702568686_7854449.jpg?format=webp&w=300&dpr=1.3",
  },
  {
    id: 4,
    name: "Shoe 4",
    price: 80,
    img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1716621220_6811161.jpg?format=webp&w=300&dpr=1.3",
  },
  {
    id: 5,
    name: "Shoe 5",
    price: 90,
    img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1719591512_6350004.jpg?format=webp&w=300&dpr=1.3",
  },
  {
    id: 6,
    name: "Shoe 6",
    price: 100,
    img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1718090174_1791817.jpg?format=webp&w=300&dpr=1.3",
  },
  {
    id: 7,
    name: "Shoe 7",
    price: 110,
    img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710489207_5387436.jpg?format=webp&w=300&dpr=1.3",
  },
 
  {
    id: 10,
    name: "Shoe 10",
    price: 50,
    img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1713851299_3614820.jpg?format=webp&w=300&dpr=1.3",
  },
  {
    id: 11,
    name: "Shoe 11",
    price: 50,
    img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1717244847_8302434.jpg?format=webp&w=300&dpr=1.3",
  },
  {
    id: 12,
    name: "Shoe 12",
    price: 50,
    img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1694689639_5944281.jpg?format=webp&w=300&dpr=1.3",
  },
  {
    id: 13,
    name: "Shoe 13",
    price: 50,
    img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1709705663_3894518.jpg?format=webp&w=300&dpr=1.3",
  },
  {
    id: 14,
    name: "Shoe 14",
    price: 50,
    img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1702568686_7854449.jpg?format=webp&w=300&dpr=1.3",
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
              <p className="shoe-price">${shoe.price}</p>
              <button className="add-to-cart" onClick={() => addToCart(shoe)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
