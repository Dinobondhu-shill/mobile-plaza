import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Banner = () => {
  return (
    <div className='w-full flex items-center justify-center rounded-md'>
      <Swiper
      loop
        pagination={{
          dynamicBullets: true,
        }}
        Autoplay={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper "
      >
        <SwiperSlide><img src="/public/slider-661566871d7d0.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/public/slider-6521151ff346e.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/public/slider-661566871d7d0.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/public/slider-6521151ff346e.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;