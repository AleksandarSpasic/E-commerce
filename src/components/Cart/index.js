import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useInjectSaga } from 'redux/injectSaga';
import saga from './redux/saga';
import { fetchCartItems } from './redux/actions';
import { makeSelectCartItems } from './redux/selectors';

import CloseSvg from 'assets/svgs/CloseSvg';
import MinusSvg from 'assets/svgs/MinusSvg';
import PlusSvg from 'assets/svgs/PlusSvg';

import Photo from 'assets/product.jpg';
import Image from 'components/Image/Loadable';
import Button from 'components/Button';

const key = 'cart';

const Cart = ({ isOpen, close }) => {
  useInjectSaga({ key, saga });

  const dispatch = useDispatch();
  const items = useSelector(makeSelectCartItems());

  useEffect(() => {
    if (isOpen && !items.length) dispatch(fetchCartItems());
  }, [isOpen, items, dispatch]);

  return (
    <div className={isOpen ? 'cart_inner active' : 'cart_inner'}>
      <div className='cart_mask' onClick={close} />

      <div className='cart_outer' onClick={(e) => e.stopPropagation()}>
        <div className='cart_header'>
          <p>Cart</p>
          <CloseSvg onClick={close} />
        </div>

        <div className='cart_body'>
          <div className='cart_item'>
            <Image src={Photo} />
            <div className='cart_item_content'>
              <h4>Product Name</h4>
              <p>$ 28.21</p>
              <span>remove</span>
            </div>
            <div className='cart_item_icons'>
              <MinusSvg />
              <div>1</div>
              <PlusSvg />
            </div>
          </div>
        </div>

        <div className='cart_footer'>
          <p>Total price: $ 29.99</p>
          <div className='btn_holder'>
            <Button>Checkout</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
