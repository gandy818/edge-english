'use client';

import { useState } from 'react';

const EDGE_DETAILS = [
  {
    index: 1,
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
        <p className="text-2xl max-md:text-base">
          단순히 영어를 잘하는 원어민이 아닙니다. 영어를{' '}
          <span className="font-semibold">
            ‘잘 가르칠 수 있는’ 국제 자격(TESOL/TEFL)을 갖춘 강사만 선발
          </span>
          해요.
        </p>
        <p className="mt-4 text-[#8E8E8E] max-md:mt-2 max-md:text-xs">
          * TESOL/TEFL이란? 영어가 모국어가 아닌 사람들에게 영어를 가르치는 국제영어교사
          자격증
        </p>
      </>
    ),
    image: '/images/main/detail01.png',
    alt: '',
  },
  {
    index: 2,
    title: '5단계 검증으로 선별된 튜터',
    contents: (
      <>
        <p className="text-[32px] font-medium max-md:text-base">
          5단계 검증 시스템을 통해{' '}
          <span className="font-bold">자격부터 인성, 수업 역량까지 철저히 확인</span>
          해요.
        </p>
      </>
    ),
    image: '/images/main/detail02.png',
    alt: '',
  },
  {
    index: 3,
    title: '비지니스 영어·면접·발표 \n 준비 완벽 지원',
    contents: (
      <>
        <p className="text-2xl max-md:text-base">
          📌 전화·이메일·회의까지, 실제 직장에서 쓰이는 표현만 골라 배웁니다.
        </p>
        <p className="mt-4 text-2xl max-md:mt-1 max-md:text-base">
          📌 영어 면접과 발표도 원어민 튜터와 1:1로 연습하며 자신 있게 준비할 수 있어요.
        </p>
      </>
    ),
    image: '/images/main/detail03.png',
    alt: '',
  },
  {
    index: 4,
    title: '수업 노트 개별 제공',
    contents: (
      <>
        <p className="text-[32px] font-bold max-md:text-base">
          튜터가 매 수업 후 정리해주는 노트로 복습은 물론, 놓친 부분도 다시 확인할 수
          있어요.
        </p>
      </>
    ),
    image: '/images/main/detail04.png',
    alt: '',
  },
];

const TAB_BG_MATRIX = [
  [
    'linear-gradient(90deg, #AA96FF -2.03%, #7D5FFF 102.29%)', // 1 active
    '#614BC0',
    '#5542A5',
    '#614BC0',
  ],
  [
    '#614BC0',
    'linear-gradient(90deg, #AA96FF -2.03%, #7D5FFF 102.29%)', // 2 active
    '#5542A5',
    '#614BC0',
  ],
  [
    '#614BC0',
    '#5542A5',
    'linear-gradient(90deg, #AA96FF -2.03%, #7D5FFF 102.29%)', // 3 active
    '#614BC0',
  ],
  [
    '#614BC0',
    '#5542A5',
    '#614BC0',
    'linear-gradient(90deg, #AA96FF -2.03%, #7D5FFF 102.29%)', // 4 active
  ],
];

export default function PointsTab() {
  const [active, setActive] = useState(1);

  const currentDetail =
    EDGE_DETAILS.find((item) => item.index === active) ?? EDGE_DETAILS[0];

  return (
    <div className="mx-auto max-w-[1220px]">
      {/* tab */}
      <div className="flex h-25 rounded-t-2xl bg-[#614BC0] max-md:h-14">
        {[1, 2, 3, 4].map((num, idx) => (
          <button
            key={num}
            className={[
              'flex-center flex-1 text-2xl max-md:text-xs',
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
            <p className="w-fit font-montserrat font-bold text-white">{`POINT 0${num}`}</p>
          </button>
        ))}
      </div>

      {/* content */}
      <div className="flex min-h-[534px] w-full rounded-b-2xl bg-white px-[47px] py-6 max-md:h-auto max-md:flex-col-reverse max-md:px-4.5">
        <div className="flex-1 p-6 max-md:p-0">
          <span className="font-montserrat text-2xl font-bold text-[#7D5FFF] max-md:text-lg max-md:leading-none">
            point 0{currentDetail.index}
          </span>
          <div className="border-b-2 border-dashed pb-6 max-md:pb-4">
            <p className="mt-6 whitespace-pre-line text-5xl font-extrabold leading-[120%] max-md:mt-2 max-md:text-2xl">
              {currentDetail.title}
            </p>
          </div>
          <div className="py-10 max-md:mt-4 max-md:py-2">{currentDetail.contents}</div>
        </div>
        <div className="flex-center flex-1">
          <img src={currentDetail.image} alt={currentDetail.alt} />
        </div>
      </div>
    </div>
  );
}
