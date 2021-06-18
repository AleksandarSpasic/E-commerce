import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import ProductItem from './ProductItem';
import PrevArrowSvg from 'assets/svgs/PrevArrowSvg';
import NextArrowSvg from 'assets/svgs/NextArrowSvg';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ProductsSlider = ({ products }) => {
  return (
    <div className="products_slider">
      <Swiper
        spaceBetween={100}
        slidesPerView={2.5}
        slidesPerGroup={1}
        speed={500}
        loop
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        breakpoints={{
          1900: {
            spaceBetween: 80,
          },
          1680: {
            slidesPerView: 2.5,
          },
          1400: {
            slidesPerView: 2.3,
            spaceBetween: 50,
          },
          1250: {
            slidesPerView: 1.8,
            spaceBetween: 50,
          },
          1100: {
            slidesPerView: 1.5,
            spaceBetween: 50,
          },
          1000: {
            slidesPerView: 1.2,
            spaceBetween: 50,
          },
          100: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
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
  );
};

export default ProductsSlider;
