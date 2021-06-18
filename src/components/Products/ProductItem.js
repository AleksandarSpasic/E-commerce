import React from 'react';
import Image from 'components/Image/Loadable';
import Button from 'components/Button';

const ProductItem = ({ product }) => {
  const { image, title, description, price } = product;

  const cutText = (text, limit) => text.length > limit ? text.substr(0, limit) + '...' : text;

  return (
    <div className="product_item">
      <div className="img">
        <Image src={image} />
      </div>
      <h2>{cutText(title, 20)}</h2>
      <p>{cutText(description, 40)}</p>
      <h6>$ {price}</h6>
      <Button onClick={() => console.log('clocl')}>Add to cart</Button>
    </div>
  );
};

export default ProductItem;
