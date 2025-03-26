'use client';

import { TutorType } from '@/types/TutorType';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function TutorPage() {
  const [tutorList, setTutorList] = useState<TutorType[]>([]);

  useEffect(() => {
    const getTutorList = async () => {
      try {
        const res = await axios.get('/data/tutor.json');

        setTutorList(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    getTutorList();
  }, []);

  return (
    <div className="mx-auto max-md:px-4">
      <div className="mt-[120px] flex flex-col justify-center max-md:mt-[60px]">
        {/* 섹션 1 */}
        <>
          <div className="flex flex-wrap justify-center text-5xl font-bold max-md:flex-col max-md:text-4xl">
            <p className="self-center pr-4">TESOL/TEFL을 보유한</p>
            <p className="self-center text-[#7D5FFF] md:pr-4">100% 미국·캐나다</p>
            <p className="self-center">원어민 강사진</p>
          </div>
          <div className="mt-6 flex justify-center">
            <p className="text-2xl font-normal text-[#4A4A4A]">
              강사 선택 고민될 땐? 엣지 운영진이 도와드릴게요!
            </p>
          </div>
          <div className="flex justify-center">
            <Link
              href="https://pf.kakao.com/_blxgib"
              target="_blank"
              className="mb-[60px] mt-10 flex flex-row justify-center rounded-lg bg-[#FFEB3B] px-[40px] py-[18px]"
            >
              <img
                src="/icons/kakao-btn.svg"
                alt="kakao channel button"
                className="h-6 w-6"
              />
              <p className="pl-2 font-bold">채팅상담 하기</p>
            </Link>
          </div>

          <div className="flex max-w-[1200px] flex-wrap justify-center gap-4 self-center">
            {tutorList.map((tutor) => (
              <div key={tutor.name} className="flex w-72 flex-col justify-start">
                <img src={tutor.img} alt={tutor.name} />
                <div className="flex flex-row items-center justify-center pt-6">
                  <img src="/icons/usa.svg" />
                  <p className="pl-2 font-montserrat text-2xl font-bold">{tutor.name}</p>
                </div>
                <p className="mt-2 self-center text-center font-bold">{tutor.desc}</p>
                <div className="mt-4 flex flex-wrap justify-center gap-1">
                  {tutor.tags.map((tag) => (
                    <div
                      key={tag}
                      className="rounded-lg bg-[#7D5FFF] bg-opacity-10 px-3 py-2 text-[14px] font-semibold text-[#5542A5]"
                    >
                      #{tag}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>

        {/* 섹션 2 */}
        <div className="mt-[60px]">
          <div
            className="flex min-h-[448px] justify-end bg-cover bg-center"
            style={{
              backgroundImage: 'url(/images/bg_tutor.png)', // 배경 이미지 URL
            }}
          >
            <div className="self-center pr-[120px]">
              <p className="text-5xl font-bold leading-relaxed text-white">
                실력과 인성 모두 확인된 튜터만
              </p>
              <p className="text-[22px] font-normal text-white">
                엣지영어는 철저한 6단계 검증 과정을 통해 강사를 채용해요.
              </p>
              <br />
              <p className="text-[22px] font-normal text-white">
                사전 서면 인터뷰와 서류 심사로 기본 자격을 확인하고,
              </p>
              <p className="text-[22px] font-normal text-white">
                2:1 심층 면접에서 인성과 소통 능력, 책임감을 꼼꼼히 살펴봅니다.
              </p>
              <p className="text-[22px] font-normal text-white">
                면접을 통과한 강사는 실전 수업 평가와 2개월 집중 모니터링을 거쳐야 정식
                튜터가 됩니다.
              </p>
              <br />
              <p className="text-[22px] font-normal text-white">
                학습자들이 믿고 배울 수 있도록, 엄격한 절차와 기준으로 강사를 선발합니다.
              </p>
            </div>
          </div>
        </div>

        {/* 섹션 3 */}
        <div className="mt-[120px] flex flex-col items-center">
          <p className="text-5xl font-bold">엣지영어 6단계 강사 선발 과정</p>
          <div className="mt-[60px] flex flex-row justify-start">
            {[1, 2, 3, 4, 5, 6].map((e) => (
              <div key={e} className="flex-grow">
                <img src={`/icons/employ${e}.svg`} />
              </div>
            ))}
          </div>
        </div>

        {/* 섹션 4 */}
        <div className="mt-[120px] flex w-full flex-col bg-[#F3F6F8] pb-[120px] pt-[120px]">
          <p className="self-center text-5xl font-bold">
            어떤 튜터를 만나도 안심할 수 있어요.
          </p>
          <p className="mt-6 self-center text-2xl font-normal text-[#4A4A4A]">
            엣지영어의 모든 튜터는 아래 자격 요건을 모두 충족해요.
          </p>
          <div className="mt-10 flex max-w-[1200px] flex-row gap-4 self-center">
            <div className="flex w-[588px] flex-grow items-center rounded-lg border border-[#E8E8E8] bg-white px-10 py-8 text-center text-2xl font-medium">
              <img src="/icons/check.svg" className="mr-[16px]" />
              미국
              <span className="text-[#D2D2D2]">・</span>
              캐나다 출신
            </div>
            <div className="flex w-[588px] flex-grow items-center rounded-lg border border-[#E8E8E8] bg-white px-10 py-8 text-center text-2xl font-medium">
              <img src="/icons/check.svg" className="mr-[16px]" />
              TESOL/TEFL 국제 영어교육 자격증 보유
            </div>
          </div>
          <div className="mt-[16px] flex max-w-[1200px] flex-row gap-4 self-center">
            <div className="flex w-[588px] flex-grow items-center rounded-lg border border-[#E8E8E8] bg-white px-10 py-8 text-center text-2xl font-medium">
              <img src="/icons/check.svg" className="mr-[16px]" />
              영어 교육 경력 1년 이상
            </div>
            <div className="flex w-[588px] flex-grow items-center rounded-lg border border-[#E8E8E8] bg-white px-10 py-8 text-center text-2xl font-medium">
              <img src="/icons/check.svg" className="mr-[16px]" />
              시범 강의 평가 통과
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
