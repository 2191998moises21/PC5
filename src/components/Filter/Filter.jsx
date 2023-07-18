/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Filter.css';

const Filter = ({ handleFilter }) => {
  const [filterValue, setFilterValue] = useState('');

  const handleChange = (e) => {
    setFilterValue(e.target.value);
    handleFilter(e.target.value);
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filtrar por nombre"
        value={filterValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;
