import React from 'react';

const OrderHistory = ({ orders }) => {
  return (
    <div>
      <h1>Order History</h1>
      {orders.map((order) => (
        <div key={order._id}>
          <h2>{order.product.description}</h2>
          <p>{order.product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
