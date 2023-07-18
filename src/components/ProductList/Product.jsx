/* eslint-disable react/prop-types */
import './Product.css';

const Product = ({ product }) => {
  const { name, description, price, image } = product;

  return (
    <div className="product">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Precio: ${price}</p>
    </div>
  );
};

export default Product;
