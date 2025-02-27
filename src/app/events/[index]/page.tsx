'use client';

import { PostType } from '@/types/PostType';
import axios from 'axios';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function EventDetailPage() {
  const param = useParams();
  const currentIndex = param.index;
  const [event, setEvent] = useState<PostType>();

  const getEventDetail = async () => {
    try {
      const res = await axios.get<PostType[]>('/data/events.json');

      const { data } = res;

      setEvent(data.filter((item) => item.index === Number(currentIndex))[0]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getEventDetail();
  }, []);

  return (
    <div className="mx-auto max-w-[1200px]">
      {/* 타이틀 */}
      <div className="mt-[120px] flex flex-col gap-6 border-t-4 border-[#000] py-16">
        <p className="font-montserrat text-2xl font-semibold text-[#000]">
          {event?.type}
        </p>
        <h1 className="font-montserrat text-5xl font-semibold text-[#000]">
          {event?.title}
        </h1>
        <p className="font-semibold text-[#606060]">
          등록일 <span className="font-montserrat text-[#606060]">{event?.date}</span>
        </p>
      </div>

      {/* 본문 */}
      <pre className="border-t border-[#A4A4A4] py-16">{event?.content}</pre>

      {/* 이전글, 다음글 */}
      <div className="flex cursor-pointer gap-10 border-b border-t border-[#E8E8E8] px-2 py-6">
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M20.031 14.4694L12.531 6.96945C12.4614 6.89971 12.3787 6.84439 12.2876 6.80665C12.1966 6.76891 12.099 6.74948 12.0004 6.74948C11.9019 6.74948 11.8043 6.76891 11.7132 6.80665C11.6222 6.84439 11.5394 6.89971 11.4698 6.96945L3.96979 14.4694C3.82906 14.6102 3.75 14.801 3.75 15.0001C3.75 15.1991 3.82906 15.39 3.96979 15.5307C4.11052 15.6714 4.30139 15.7505 4.50042 15.7505C4.69944 15.7505 4.89031 15.6714 5.03104 15.5307L12.0004 8.56038L18.9698 15.5307C19.0395 15.6004 19.1222 15.6557 19.2132 15.6934C19.3043 15.7311 19.4019 15.7505 19.5004 15.7505C19.599 15.7505 19.6965 15.7311 19.7876 15.6934C19.8786 15.6557 19.9614 15.6004 20.031 15.5307C20.1007 15.461 20.156 15.3783 20.1937 15.2872C20.2314 15.1962 20.2508 15.0986 20.2508 15.0001C20.2508 14.9015 20.2314 14.8039 20.1937 14.7129C20.156 14.6219 20.1007 14.5391 20.031 14.4694Z"
              fill="black"
            />
          </svg>
          <p className="font-semibold text-[#000]">이전 글</p>
        </div>
        <p className="text-[#606060]">이전 글의 제목이 들어갑니다</p>
      </div>

      <div className="flex cursor-pointer gap-10 border-b border-[#E8E8E8] px-2 py-6">
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M20.031 9.53055L12.531 17.0306C12.4614 17.1003 12.3787 17.1556 12.2876 17.1933C12.1966 17.2311 12.099 17.2505 12.0004 17.2505C11.9019 17.2505 11.8043 17.2311 11.7132 17.1933C11.6222 17.1556 11.5394 17.1003 11.4698 17.0306L3.96979 9.53055C3.82906 9.38982 3.75 9.19895 3.75 8.99993C3.75 8.80091 3.82906 8.61003 3.96979 8.4693C4.11052 8.32857 4.30139 8.24951 4.50042 8.24951C4.69944 8.24951 4.89031 8.32857 5.03104 8.4693L12.0004 15.4396L18.9698 8.4693C19.0395 8.39962 19.1222 8.34435 19.2132 8.30663C19.3043 8.26892 19.4019 8.24951 19.5004 8.24951C19.599 8.24951 19.6965 8.26892 19.7876 8.30663C19.8786 8.34435 19.9614 8.39962 20.031 8.4693C20.1007 8.53899 20.156 8.62171 20.1937 8.71276C20.2314 8.8038 20.2508 8.90138 20.2508 8.99993C20.2508 9.09847 20.2314 9.19606 20.1937 9.2871C20.156 9.37815 20.1007 9.46087 20.031 9.53055Z"
              fill="black"
            />
          </svg>
          <p className="font-semibold text-[#000]">다음 글</p>
        </div>
        <p className="text-[#606060]">이전 글의 제목이 들어갑니다</p>
      </div>

      {/* 목록으로 */}
      <Link
        href={'/events'}
        className="flex-center mx-auto mt-16 h-14 w-50 cursor-pointer gap-2 rounded-lg bg-[#606060] font-bold text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12ZM3.75 6.75H20.25C20.4489 6.75 20.6397 6.67098 20.7803 6.53033C20.921 6.38968 21 6.19891 21 6C21 5.80109 20.921 5.61032 20.7803 5.46967C20.6397 5.32902 20.4489 5.25 20.25 5.25H3.75C3.55109 5.25 3.36032 5.32902 3.21967 5.46967C3.07902 5.61032 3 5.80109 3 6C3 6.19891 3.07902 6.38968 3.21967 6.53033C3.36032 6.67098 3.55109 6.75 3.75 6.75ZM20.25 17.25H3.75C3.55109 17.25 3.36032 17.329 3.21967 17.4697C3.07902 17.6103 3 17.8011 3 18C3 18.1989 3.07902 18.3897 3.21967 18.5303C3.36032 18.671 3.55109 18.75 3.75 18.75H20.25C20.4489 18.75 20.6397 18.671 20.7803 18.5303C20.921 18.3897 21 18.1989 21 18C21 17.8011 20.921 17.6103 20.7803 17.4697C20.6397 17.329 20.4489 17.25 20.25 17.25Z"
            fill="white"
          />
        </svg>
        목록으로
      </Link>
    </div>
  );
}
