import React from 'react';

const Cart = ({ cart, removeFromCart, checkout }) => {
  const totalCost = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map((product) => (
        <div key={product._id}>
          <h3>{product.description}</h3>
          <p>Price: {product.price}</p>
          <button onClick={() => removeFromCart(product._id)}>Remove from cart</button>
        </div>
      ))}
      <h3>Total Cost: {totalCost}</h3>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
};

export default Cart;
