import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useInjectSaga } from 'redux/injectSaga';
import saga from 'components/Products/redux/saga';
import { fetchProducts } from 'components/Products/redux/actions';
import { makeSelectProducts } from 'components/Products/redux/selectors';

import ScreenWrapper from 'components/helper/ScreenWrapper';
import ProductsSlider from 'components/Products/ProductsSlider';
import TextAbout from './TextAbout';
import messages from './messages';

const key = 'products';

const Home = () => {
  useInjectSaga({ key, saga });

  const dispatch = useDispatch();
  const products = useSelector(makeSelectProducts());

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <ScreenWrapper className='home' title={messages.helmet}>
      <div className='container'>
        <div className='home_screen_content'>
          <TextAbout />
          {products.length ? <ProductsSlider products={products} /> : null}
        </div>
      </div>
    </ScreenWrapper>
  );
};

export default Home;
