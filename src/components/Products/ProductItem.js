import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { cutText } from 'utils/cutText';
import { setCartItems } from 'components/Cart/redux/actions';
import { makeSelectCartItems } from 'components/Cart/redux/selectors';
import Image from 'components/Image/Loadable';
import Button from 'components/Button';

const ProductItem = ({ product }) => {
  const { id: productId, image, title, description, price } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(makeSelectCartItems());

  const addToCart = () => {
    const sameItem = cartItems.find(({ id }) => id === productId);
    if (sameItem) {
      const copy = { ...sameItem };
      copy.quantity++;
      const filtered = cartItems.filter(({ id }) => id !== productId);
      dispatch(setCartItems([...filtered, copy]));
    } else {
      dispatch(setCartItems([...cartItems, { ...product, quantity: 1 }]));
    }
  };

  return (
    <div className="product_item">
      <div className="img">
        <Image src={image} />
      </div>
      <h2>{cutText(title, 20)}</h2>
      <p>{cutText(description, 40)}</p>
      <h6>$ {price}</h6>
      <Button onClick={addToCart}>Add to cart</Button>
    </div>
  );
};

export default ProductItem;
