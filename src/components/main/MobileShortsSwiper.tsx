'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

export default function MobileShortsSwiper() {
  return (
    <div className="relative">
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.custom-swiper-next',
          prevEl: '.custom-swiper-prev',
        }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        className="!pb-12 !pt-8"
        touchEventsTarget="container"
      >
        <SwiperSlide>
          <iframe
            src={`https://www.youtube.com/embed/FkJ3hjifTzk?autoplay=0`}
            title="YouTube Shorts"
            className="mx-auto aspect-[9/16] min-h-[533px] rounded-2xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            src={`https://www.youtube.com/embed/_rRgqVq4gfw?autoplay=0`}
            title="YouTube Shorts"
            className="mx-auto aspect-[9/16] min-h-[533px] rounded-2xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            src={`https://www.youtube.com/embed/Yj7pm_r38rc?autoplay=0`}
            title="YouTube Shorts"
            className="mx-auto aspect-[9/16] min-h-[533px] rounded-2xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </SwiperSlide>
      </Swiper>
      <button
        className="custom-swiper-prev absolute left-0 top-1/2 z-[9] -translate-y-1/2"
        type="button"
      >
        <Image
          src="/icons/pagination-prev1.png"
          alt="이전"
          className="h-12 w-9"
          width={36}
          height={48}
        />
      </button>
      <button
        className="custom-swiper-next absolute right-0 top-1/2 z-[9] -translate-y-1/2"
        type="button"
      >
        <Image
          src="/icons/pagination-next1.png"
          alt="다음"
          className="h-12 w-9"
          width={36}
          height={48}
        />
      </button>
    </div>
  );
}
