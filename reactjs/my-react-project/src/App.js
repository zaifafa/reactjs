import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ThankYou from "./pages/Thankyou";
import "./App.css";

const App = () => {
  const [cart, setCart] = useState([]);

  // Function to add items to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to remove single item from cart
  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      ).filter((item) => item.quantity > 0)
    );
  };

  // Function to clear entire cart
  const clearCart = () => setCart([]);

  return (
    <Router>
      <Navbar cartCount={cart.reduce((total, item) => total + item.quantity, 0)} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />}
        />
        <Route path="/thankyou" element={<ThankYou clearCart={clearCart} />} />
      </Routes>
    </Router>
  );
};

export default App;
