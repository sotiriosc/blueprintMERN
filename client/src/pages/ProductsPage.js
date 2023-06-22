import React from 'react';

const ProductsPage = ({ products }) => {
  return (
    <div>
      <h1>Our Products</h1>
      {products.map((product) => (
        <div key={product._id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
