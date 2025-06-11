'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function MobileShortsSwiper() {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={30}
      slidesPerView={1}
      className="!pb-12 !pt-8"
    >
      <SwiperSlide>
        <iframe
          src={`https://www.youtube.com/embed/FkJ3hjifTzk?autoplay=0`}
          title="YouTube Shorts"
          className="mx-auto aspect-[9/16] rounded-2xl"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </SwiperSlide>
      <SwiperSlide>
        <iframe
          src={`https://www.youtube.com/embed/FkJ3hjifTzk?autoplay=0`}
          title="YouTube Shorts"
          className="mx-auto aspect-[9/16] rounded-2xl"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </SwiperSlide>
      <SwiperSlide>
        <iframe
          src={`https://www.youtube.com/embed/FkJ3hjifTzk?autoplay=0`}
          title="YouTube Shorts"
          className="mx-auto aspect-[9/16] rounded-2xl"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </SwiperSlide>
    </Swiper>
  );
}
