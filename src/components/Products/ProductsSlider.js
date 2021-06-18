import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import ProductItem from './ProductItem';
import PrevArrowSvg from 'assets/svgs/PrevArrowSvg';
import NextArrowSvg from 'assets/svgs/NextArrowSvg';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ProductsSlider = ({ products }) => {
  return (
    <div className="products_slider_inner">
      <div className="products_slider_outer">
        <Swiper
          spaceBetween={25}
          slidesPerGroup={1}
          slidesPerView={4}
          direction="horizontal"
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductItem product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper_navigations">
          <div className="swiper-button-prev swiper-button">
            <PrevArrowSvg />
          </div>
          <div className="swiper-button-next swiper-button">
            <NextArrowSvg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSlider;
