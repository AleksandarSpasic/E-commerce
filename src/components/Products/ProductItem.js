import React from 'react';
import Image from 'components/Image/Loadable';
import Button from 'components/Button';

const ProductItem = ({ product }) => {
  const { image, title, description, price } = product;

  return (
    <div className="product_item">
      <Image src={image} />
      <h2>{title}</h2>
      <p>{description}</p>
      <h6>$ {price}</h6>
      <Button>Add to cart</Button>
    </div>
  );
};

export default ProductItem;
