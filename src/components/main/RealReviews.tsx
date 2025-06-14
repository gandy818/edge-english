'use client';

import { useEffect, useRef } from 'react';

const cards = [
  {
    content: (
      <>
        엣지영어 진짜 최고! 다른 플랫폼은 필리핀 선생님들이 많아서 발음이 조금 아쉬웠는데,
        여긴 미국, 영국, 호주 같은 영어 주 사용 국가 선생님들만 있어서 본토 발음을 배울 수
        있어서 너무 좋았어요! 수업 들을 때마다{' '}
        <span className="bg-[#FFD4014D] font-semibold">
          영어에 더 자신감 생기는 느낌이에요!
        </span>
      </>
    ),
    name: '직장인 강OO 님',
  },
  {
    content: (
      <>
        엣지영어에서 제일 맘에 드는 건 수업 시작할 때마다 복습을 꼭 한다는 거예요!{' '}
        <span className="bg-[#FFD4014D] font-semibold">
          그날 배운 내용을 다시 점검해 주니까 머릿속에 확실히 남아요. 덕분에 영어 실력이
          더 빨리 느는 것 같아요!
        </span>
      </>
    ),
    name: '전업주부 최OO 님',
  },
  {
    content: <>다른 영어 플랫폼은 약간 기계적인 느낌</>,
    name: '대학생 김OO 님',
  },
  {
    content: (
      <>
        강사님께서 제가 서투르게 말한 문장을 하나하나 워드에 적어 주시고, 같이 보면서 바로
        고쳐 주셨어요. 매 수업마다{' '}
        <span className="bg-[#FFD4014D] font-semibold">
          제 문장을 함께 수정하고 따라 읽는 과정을 반복하다 보니, 어느새 자연스럽게 영어
          문장을 말하고 있는 제 모습을 발견했답니다.{' '}
        </span>
        평생 콤플렉스였던 영어를 이렇게 재미있게 배울 수 있었다니, 정말 신기하고 감사할
        따름입니다!
      </>
    ),
    name: '유OO 님',
  },
];

export default function RealReviews() {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const position = useRef(0);
  const isPaused = useRef(false);

  // 카드 2배 복제(무한루프)
  const cardList = [...cards, ...cards];

  const SPEED = 1.2; // px per frame

  useEffect(() => {
    const track = trackRef.current as HTMLDivElement;
    if (!track) return;

    function animate() {
      if (!isPaused.current) {
        position.current -= SPEED;
        // 카드 1세트가 끝까지 가면 다시 처음으로
        if (Math.abs(position.current) >= track.scrollWidth / 2) {
          position.current = 0;
        }
        track.style.transform = `translateX(${position.current}px)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    }
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // 마우스 오버 시 멈춤/해제
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const pause = () => {
      isPaused.current = true;
    };
    const resume = () => {
      isPaused.current = false;
    };
    container.addEventListener('mouseenter', pause);
    container.addEventListener('mouseleave', resume);
    container.addEventListener('touchstart', pause);
    container.addEventListener('touchend', resume);
    return () => {
      container.removeEventListener('mouseenter', pause);
      container.removeEventListener('mouseleave', resume);
      container.removeEventListener('touchstart', pause);
      container.removeEventListener('touchend', resume);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden py-8">
      <div
        ref={trackRef}
        className="flex gap-8"
        style={{
          willChange: 'transform',
        }}
      >
        {cardList.map((card, idx) => (
          <div
            key={idx}
            className="card card-lg w-[33.75rem] min-w-[33.75rem] rounded-3xl bg-base-100 bg-white shadow-sm"
          >
            <div className="card-body gap-4 rounded-3xl border text-center">
              <p className="content-center">{card.content}</p>
              <div className="card-actions justify-center">
                <button className="rounded-full border-none bg-[#FFEB00] px-6 py-2">
                  {card.name}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
