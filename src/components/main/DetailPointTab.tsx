'use client';

import { useState } from 'react';

const EDGE_DETAILS = [
  {
    index: 1,
    subTitle: '국제영어교사 자격',
    title: (
      <>
        100% TESOL/TEFL
        <span className="md:hidden">
          <br />
        </span>{' '}
        보유 강사진
      </>
    ),
    contents: (
      <>
        <p className="text-xl max-md:text-base">
          단순히 영어를 잘하는 원어민이 아닙니다. 영어를{' '}
          <span className="font-semibold">
            ‘잘 가르칠 수 있는’ 국제 자격(TESOL/TEFL)을 갖춘 강사만 선발
          </span>
          해요.
        </p>
        <p className="mt-4 text-[#8E8E8E] max-md:mt-2 max-md:text-xs">
          * TESOL/TEFL이란? <br /> 영어가 모국어가 아닌 사람들에게 영어를 가르치는
          국제영어교사 자격증
        </p>
      </>
    ),
    image: '/images/main/detail01.png',
    alt: '',
  },
  {
    index: 2,
    subTitle: '5단계 검증 완료',
    title: '5단계 검증으로 선별된 튜터',
    contents: (
      <>
        <p className="text-2xl font-medium max-md:text-base">
          5단계 검증 시스템을 통해 <br />
          <span className="font-semibold">자격부터 인성, 수업 역량까지 철저히 확인</span>
          해요.
        </p>
      </>
    ),
    image: '/images/main/detail02.png',
    alt: '',
  },
  {
    index: 3,
    subTitle: '비즈니스 영어',
    title: '비지니스 영어·면접·발표 준비 완벽 지원',
    contents: (
      <>
        <p className="text-xl max-md:text-base">
          📌 전화·이메일·회의까지, 실제 직장에서 쓰이는 표현만 골라 배워요.
        </p>
        <p className="mt-4 text-xl max-md:mt-1 max-md:text-base">
          📌 영어 면접·발표도 원어민 튜터와 1:1 연습으로 자신 있게 준비해요.
        </p>
      </>
    ),
    image: '/images/main/detail03.png',
    alt: '',
  },
  {
    index: 4,
    subTitle: '개별 수업 노트',
    title: '수업 노트 개별 제공',
    contents: (
      <>
        <p className="text-2xl font-medium max-md:text-base">
          튜터가 매 수업 후 정리해주는 노트로{' '}
          <span className="md:hidden">
            <br />
          </span>
          복습은 물론,{' '}
          <span className="max-md:hidden">
            <br />
          </span>
          놓친 부분도 다시 확인할 수 있어요.
        </p>
      </>
    ),
    image: '/images/main/detail04.png',
    alt: '',
  },
];

export default function PointsTab() {
  const [active, setActive] = useState(1);

  const currentDetail =
    EDGE_DETAILS.find((item) => item.index === active) ?? EDGE_DETAILS[0];

  return (
    <div className="mx-auto max-w-[1220px]">
      <div className="relative">
        {/* tab */}
        {/* <div className="flex h-22 rounded-t-2xl bg-[#614BC0] max-md:h-14">
          {[1, 2, 3, 4].map((num, idx) => (
            <button
              key={num}
              className={[
                'flex flex-1 items-center justify-center text-xl max-md:text-xs',
                active === num ? 'active' : '',
                active + 1 === num && active < 4 ? 'snake' : '',
              ].join(' ')}
              onClick={() => setActive(num)}
              style={{
                borderTopLeftRadius: idx === 0 ? '1rem' : undefined,
                borderTopRightRadius: idx === 3 ? '1rem' : undefined,
                background:
                  active === num
                    ? 'linear-gradient(90deg, #AA96FF -2.03%, #7D5FFF 102.29%)'
                    : '#614BC0',
              }}
            >
              <p className="mx-auto w-fit font-montserrat font-bold text-white">
                {EDGE_DETAILS[idx].subTitle}
              </p>
            </button>
          ))}
        </div> */}
        <div className="flex h-16 gap-1 rounded-t-2xl border-b-2 max-md:h-12">
          {[1, 2, 3, 4].map((num, idx) => (
            <button
              key={num}
              className="flex flex-1 items-center justify-center rounded-t-xl text-xl max-md:text-xs"
              onClick={() => setActive(num)}
              style={{
                background:
                  active === num
                    ? 'linear-gradient(90deg, #AA96FF -2.03%, #7D5FFF 102.29%)'
                    : '#614BC0',
              }}
            >
              <p className="mx-auto w-fit font-montserrat font-bold text-white">
                {EDGE_DETAILS[idx].subTitle}
              </p>
            </button>
          ))}
        </div>

        {/* 슬라이딩 노란색 바 */}
        {/* <div
          className="absolute bottom-0 left-0 z-0 h-1.5 bg-edge-yellow transition-all duration-300"
          style={{
            width: `${100 / 4}%`, // 탭 개수에 맞게 자동계산
            transform: `translateX(${(active - 1) * 100}%)`,
          }}
        /> */}
      </div>

      {/* content */}
      <div className="flex min-h-[480px] w-full rounded-b-2xl bg-white px-[47px] py-6 max-md:h-auto max-md:min-h-[534px] max-md:flex-col-reverse max-md:px-4.5 max-md:pt-0">
        <div className="flex-1 p-6 max-md:p-0">
          {/* <span className="font-montserrat text-xl font-bold text-[#7D5FFF] max-md:text-lg max-md:leading-none">
            {currentDetail.subTitle}
          </span> */}
          <div className="border-b-2 border-dashed pb-6 max-md:pb-4">
            <p className="mt-4 whitespace-pre-line text-3xl font-extrabold leading-[120%] max-md:mt-2 max-md:text-2xl">
              {currentDetail.title}
            </p>
          </div>
          <div className="py-10 max-md:mt-4 max-md:py-2">{currentDetail.contents}</div>
        </div>
        <div className="flex-center flex-1 self-center max-md:min-h-[250px] max-md:max-w-[276px]">
          <img src={currentDetail.image} alt={currentDetail.alt} />
        </div>
      </div>
    </div>
  );
}
