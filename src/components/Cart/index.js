import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { useInjectSaga } from 'redux/injectSaga';
import saga from './redux/saga';
import { addNewCart } from './redux/actions';
import { makeSelectCartItems } from './redux/selectors';

import FormatMessage from 'i18n/FormatMessage';
import CloseSvg from 'assets/svgs/CloseSvg';
import Button from 'components/Button';
import CartItems from './CartItems';
import messages from './messages';

const Cart = ({ isOpen, close }) => {
  useInjectSaga({ key: 'cart', saga });

  const items = useSelector(makeSelectCartItems());
  const dispatch = useDispatch();
  
  let sum = 0;
  items.map(({ price, quantity }) => sum+= price * quantity);

  const handleCheckout = () => {
    const products = items.map(({ id, quantity }) => ({ productId: id, quantity }));
    
    const payload = {
      userId: 10,
      date: moment().format('YYYY-MM-DD'),
      products
    };

    dispatch(addNewCart(payload, close));
  };

  return (
    <div className={isOpen ? 'cart_inner active' : 'cart_inner'}>
      <div className='cart_mask' onClick={close} />
      <div className='cart_outer' onClick={e => e.stopPropagation()}>
        <div className='cart_header'>
          <p><FormatMessage>{messages.cart}</FormatMessage></p>
          <CloseSvg onClick={close} />
        </div>
        <CartItems items={items} />
        <div className='cart_footer'>
          <p><FormatMessage>{messages.total}</FormatMessage> $ {items.length ? sum.toFixed(2) : 0}</p>
          <div className='btn_holder'>
            <Button onClick={handleCheckout}>
              <FormatMessage>{messages.checkout}</FormatMessage>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
