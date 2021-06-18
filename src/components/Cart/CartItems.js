import React from 'react';
import { sortBy } from 'lodash';

import MinusSvg from 'assets/svgs/MinusSvg';
import PlusSvg from 'assets/svgs/PlusSvg';

import Image from 'components/Image/Loadable';
import { cutText } from 'utils/cutText';
import { useDispatch } from 'react-redux';
import { setCartItems } from './redux/actions';

const CartItems = ({ items }) => {
  const dispatch = useDispatch();

  const handleDecrement = id => {
    let item = items.find(el => el.id === id);
    let copyItem = { ...item };

    if (copyItem.quantity > 1) {
      copyItem.quantity--;
      const filtered = items.filter(({ id }) => id !== copyItem.id);
      dispatch(setCartItems([...filtered, copyItem]));
    }
  };

  const handleIncrement = id => {
    let item = items.find(el => el.id === id);
    let copyItem = { ...item };
    copyItem.quantity++;
    const filtered = items.filter(({ id }) => id !== copyItem.id);
    dispatch(setCartItems([...filtered, copyItem]));
  };

  const handleDelete = id =>
    dispatch(setCartItems(items.filter(el => el.id !== id)));

  return (
    <div className="cart_body">
      {items.length ? (
        sortBy(items, ['id']).map(({ id, image, title, price, quantity }, index) => (
          <div className="cart_item" key={id}>
            <Image src={image} alt={title} />
            <div className="cart_item_content">
              <h4>{cutText(title, 20)}</h4>
              <p>$ {(price * quantity).toFixed(2)}</p>
              <span onClick={() => handleDelete(id)}>remove</span>
            </div>
            <div className="cart_item_icons">
              <span onClick={() => handleDecrement(id)}>
                <MinusSvg />
              </span>
              <div>{quantity}</div>
              <span onClick={() => handleIncrement(id)}>
                <PlusSvg />
              </span>
            </div>
          </div>
        ))
      ) : (
        <p className="empty_cart">Cart is empty</p>
      )}
    </div>
  );
};

export default CartItems;
