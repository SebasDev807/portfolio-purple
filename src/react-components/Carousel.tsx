import React, { useRef, useState, type ReactNode } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

interface CarouselProps<T = any> {
  items: T[];
  renderItem?: (item: T, index: number) => React.ReactNode;
}

export function Carousel<T>({ items, renderItem }: CarouselProps<T>) {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
      breakpoints={{
        0: {          //  (móviles)
          slidesPerView: 1,
          spaceBetween: 50,
        },
        640: {        //  (tablets)
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {       //  (desktop)
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {items.map((item, i) => (
        <SwiperSlide key={i}>
          {renderItem
            ? renderItem(item, i)
            : JSON.stringify(item)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
