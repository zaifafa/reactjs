import React from "react";

const products = [
  { id: 1, name: "Minimal Desk Lamp", price: 89.99, image: "https://www.morentz.com/cdn/shop/files/50108595_01__master.jpg?v=1716185707&width=2048" },
  { id: 2, name: "Ceramic Coffee Mug", price: 24.99, image: "https://m.media-amazon.com/images/I/61a2v30mxOL._AC_SL1500_.jpg" },
  { id: 3, name: "Leather Notebook", price: 34.99, image: "https://img.drz.lazcdn.com/static/pk/p/4b0c324498b10a0de357b4f3f299ce5d.jpg_720x720q80.jpg" },
  { id: 4, name: "Bamboo Plant Stand", price: 49.99, image: "https://www.ikea.com/us/en/images/products/daksjus-plant-stand-bamboo__1289437_ph196769_s5.jpg" },
  { id: 5, name: "Abstract Wall Art", price: 129.99, image: "https://aesthetix.pk/cdn/shop/files/bohoart.jpg?v=1712072380" },
  { id: 6, name: "Geometric Bookends", price: 39.99, image: "https://modernquests.com/cdn/shop/files/esq-living-hollow-blocks-metal-bookends-set-of-2-black-1.jpg?v=1716723334&width=2048" },
];

const Home = ({ addToCart }) => {
  return (
    <div className="home-container">
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)} className="button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
