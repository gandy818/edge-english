'use client';

import { TeatureType } from '@/types/TeatureType';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function TutorPage() {
  const [teatureList, setTeatureList] = useState<TeatureType[]>([]);
  const [width, setWidth] = useState<number | undefined>(undefined);
  const ref = useRef<HTMLDivElement>(null);
  const getTeatureList = async () => {
    try {
      const res = await axios.get('/data/teature.json');

      setTeatureList(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getTeatureList();
  }, []);

  return (
    <div className="mx-auto max-md:px-4">
      <div className="mt-[120px] flex flex-col justify-center max-md:mt-[60px]">
        <div className="flex flex-wrap justify-center text-[48px] font-bold max-md:flex-col max-md:text-[36px]">
          <p className="md: self-center pr-4">TESOL/TEFL을 보유한</p>
          <p className="self-center text-[#7D5FFF] md:pr-4">100% 미국·캐나다</p>
          <p className="self-center">원어민 강사진</p>
        </div>
        <div className="mt-6 flex justify-center">
          <p className="text-[24px] font-normal text-[#4A4A4A]">
            강사 선택 고민될 땐? 엣지 운영진이 도와드릴게요!
          </p>
        </div>
        <div className="flex justify-center">
          <Link
            href="https://pf.kakao.com/_blxgib"
            target="_blank"
            font-montserrat
            className="my-10 flex flex-row justify-center rounded-lg bg-[#FFEB3B] px-[40px] py-[18px]"
          >
            <img
              src="/icons/kakao-btn.svg"
              alt="kakao channel button"
              className="h-6 w-6"
            />
            <p className="pl-2 text-[16px] font-bold">채팅상담 하기</p>
          </Link>
        </div>
        <div className="flex max-w-[1200px] flex-wrap justify-center gap-4 self-center">
          {teatureList.map((e) => (
            <div key={e.name} className="flex w-[288px] flex-col justify-start">
              <img src={e.img} alt={e.name} />
              <div className="flex flex-row items-center justify-center pt-6">
                <img src="/icons/usa.svg" />
                <p className="pl-2 font-montserrat text-[24px] font-bold">{e.name}</p>
              </div>
              <p className="mt-2 self-center text-center text-[16px] font-bold">
                {e.desc}
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-1">
                {e.tag.map((e2) => (
                  <div
                    key={e2}
                    className="rounded-lg bg-[#7D5FFF] bg-opacity-10 px-3 py-2 text-[14px] font-semibold text-[#5542A5]"
                  >
                    #{e2}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-[60px]">
          <div
            ref={ref}
            className="min-h-[448px] bg-cover bg-center"
            style={{
              backgroundImage: 'url(/images/bg_tutor.png)', // 배경 이미지 URL
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
