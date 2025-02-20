import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, removeFromCart, clearCart }) => {
  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div className="cart-container">
      <h1 className="title">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div>
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h2 className="cart-item-name">{item.name}</h2>
                  <p className="cart-item-price">${item.price.toFixed(2)}</p>
                </div>
                <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <p className="total-price">Total: <strong>${totalAmount}</strong></p>
            <div className="cart-buttons">
              <button onClick={clearCart} className="clear-cart">Clear Cart</button>
              <Link to="/thankyou">
                <button className="checkout-button">Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
