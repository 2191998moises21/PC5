// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList/ProductList';
import Filter from './components/Filter/Filter';
import productsData from './data/products.json';

function App() {
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  function handleFilter(filterValue) {
    const filtered = productsData.filter((product) =>
      product.name.toLowerCase().includes(filterValue.toLowerCase())
    );
    setFilteredProducts(filtered);
  }

  return (
    <div className="app">
      <h1>Catálogo de Productos</h1>
      <Filter handleFilter={handleFilter} />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
