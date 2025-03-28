'use client';

import { TutorType } from '@/types/TutorType';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function TutorPage() {
  const [tutorList, setTutorList] = useState<TutorType[]>([]);

  const introduceList = [
    '미국・캐나다 출신',
    'TESOL/TEFL 국제 영어교육 자격증 보유',
    '영어 교육 경력 1년 이상',
    '시범 강의 평가 통과',
  ];

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
    <div className="mx-auto">
      <div className="mt-[120px] flex flex-col justify-center max-md:mt-[60px]">
        {/* 섹션 1 */}
        <>
          <div className="flex flex-wrap justify-center text-5xl font-bold max-md:flex-col max-md:text-[32px]">
            <p className="self-center pr-4">TESOL/TEFL을 보유한</p>
            <p className="self-center text-[#7D5FFF] md:pr-4">100% 미국·캐나다</p>
            <p className="self-center">원어민 강사진</p>
          </div>
          <div className="mt-6 flex justify-center">
            <p className="text-center text-2xl font-normal text-[#4A4A4A] max-md:text-base">
              강사 선택 고민될 땐?&nbsp;
              <br className="md:hidden" />
              엣지 운영진이 도와드릴게요!
            </p>
          </div>
          <div className="flex justify-center">
            <Link
              href="https://pf.kakao.com/_blxgib"
              target="_blank"
              className="mb-15 mt-10 flex flex-row justify-center rounded-lg bg-[#FFEB3B] px-[40px] py-[16px]"
            >
              <img
                src="/icons/kakao-btn.svg"
                alt="kakao channel button"
                className="h-6 w-6"
              />
              <p className="pl-2 font-bold">채팅상담 하기</p>
            </Link>
          </div>

          <div className="mt-[60px] flex max-w-[1200px] flex-wrap justify-center gap-4 self-center max-md:flex-col max-md:gap-10">
            {tutorList.map((tutor) => (
              <div key={tutor.name} className="flex w-72 flex-col justify-start">
                <img className="rounded-2xl" src={tutor.img} alt={tutor.name} />
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

        {/* 섹션 2 웹 */}
        <div className="mt-[60px] max-md:hidden">
          <div
            className="flex min-h-[448px] justify-end bg-cover bg-center"
            style={{
              backgroundImage: 'url(/images/bg-tutor.png)', // 배경 이미지 URL
            }}
          >
            <div className="self-center pr-[120px]">
              <p className="text-5xl font-bold leading-relaxed text-white">
                실력과 인성 모두 확인된 튜터만
              </p>
              <p className="text-[22px] font-normal text-white">
                엣지영어는 철저한 5단계 검증 과정을 통해 강사를 채용해요.
              </p>
              <br />
              <p className="text-[22px] font-normal text-white">
                서면 인터뷰와 서류 심사로 기본 자격을 확인하고,
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

        {/* 섹션 2 모바일 */}
        <div className="mt-[60px] md:hidden">
          <div
            className="flex min-h-[1000px] justify-end bg-cover bg-center"
            style={{
              backgroundImage: 'url(/images/mobile-bg-tutor.png)', // 배경 이미지 URL
            }}
          >
            <div className="px-4 pt-[60px]">
              <p className="text-[32px] font-bold leading-tight text-white">
                실력과 인성
              </p>
              <p className="text-[32px] font-bold leading-relaxed text-white">
                모두 확인된 튜터만
              </p>
              <br />
              <p className="text-base font-normal text-white">
                엣지영어는 철저한 5단계 검증 과정을 통해 강사를 채용해요.
              </p>
              <br />
              <p className="text-base font-normal text-white">
                서면 인터뷰와 서류 심사를 통해 기본 자격을 확인하고, 2:1 심층 면접에서
                인성, 소통능력, 책임감을 꼼꼼히 살펴봅니다. 면접을 통과한 후보는 시범 강의
                평가를 거쳐 정식 튜터가 됩니다.
              </p>
              <br />
              <p className="text-base font-normal text-white">
                학습자들이 믿고 배울 수 있도록, 엄격한 절차와 기준으로 강사를 선발합니다.
              </p>
            </div>
          </div>
        </div>

        {/* 섹션 3 웹 */}
        <div className="mt-[120px] flex flex-col items-center max-md:hidden">
          <p className="text-5xl font-bold">엣지영어 5단계 강사 선발 과정</p>
          <div className="mt-[60px] flex flex-row justify-start">
            {[1, 2, 3, 4, 5].map((e) => (
              <div key={e} className="flex-grow">
                <img src={`/icons/step-${e}.svg`} />
              </div>
            ))}
          </div>
        </div>

        {/* 섹션 3 모바일 */}
        <div className="mt-[60px] flex flex-col items-center text-center md:hidden">
          <p className="text-[32px] font-bold">
            엣지영어 <br /> 5단계 강사 선발 과정
          </p>
          <div className="mt-[60px] flex flex-col justify-center">
            {[1, 2, 3, 4, 5].map((e) => (
              <div key={e}>
                <img src={`/icons/mobile-step-${e}.svg`} />
                {e === 5 ? (
                  <div></div>
                ) : (
                  <div className="my-4 flex justify-center">
                    <img src="/icons/arrow-down.svg" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 섹션 4 웹 */}
        <div className="mt-[120px] flex w-full flex-col bg-[#F3F6F8] py-[120px] max-md:hidden">
          <p className="self-center text-5xl font-bold">
            어떤 튜터를 만나도 안심할 수 있어요.
          </p>
          <p className="mt-6 self-center text-2xl font-normal text-[#4A4A4A]">
            엣지영어의 모든 튜터는 아래 자격 요건을 모두 충족해요.
          </p>
          <div className="mt-[40px] grid w-full max-w-[1200px] grid-cols-2 items-center gap-4 self-center">
            {introduceList.map((e) => (
              <div className="flex flex-grow items-center rounded-lg border border-[#E8E8E8] bg-white px-10 py-8 text-center text-2xl font-medium">
                <img src="/icons/check.svg" className="mr-4" />
                {e}
              </div>
            ))}
          </div>
        </div>

        {/* 섹션 4 모바일 */}
        <div className="mt-[60px] flex w-full flex-col bg-[#F3F6F8] py-[60px] md:hidden">
          <p className="self-center text-center text-[32px] font-bold">
            어떤 튜터를 만나도
            <br />
            안심할 수 있어요.
          </p>
          <p className="mt-4 self-center text-center text-base font-normal text-[#4A4A4A]">
            엣지영어의 모든 튜터는
            <br />
            아래 자격 요건을 모두 충족해요.
          </p>
          <div className="mt-[40px] flex w-full flex-col justify-stretch gap-4 self-center px-6">
            {introduceList.map((e) => (
              <div className="flex flex-grow items-center rounded-lg border border-[#E8E8E8] bg-white px-4 py-6 text-lg font-medium">
                <img src="/icons/check.svg" className="mr-2 h-6 w-6" />
                {e}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
