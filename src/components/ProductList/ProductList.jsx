/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Product from './Product';

const ProductList = ({ products }) => {
  const [sortBy, setSortBy] = useState('name');

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const sortedProducts = [...products].sort((a, b) =>
    a[sortBy] > b[sortBy] ? 1 : -1
  );

  return (
    <div>
      <select value={sortBy} onChange={handleSortChange}>
        <option value="name">Nombre</option>
        <option value="price">Precio</option>
      </select>

      <div className="product-list">
        {sortedProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
