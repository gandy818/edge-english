'use client';

import Link from 'next/link';

export default function FloatingMenu() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 부드럽게 스크롤
    });
  };

  return (
    <div className="fixed bottom-[4.5rem] right-4.5 z-20 flex flex-col gap-2 xs:bottom-10 xs:right-10">
      {/* 카카오 버튼 */}
      <Link
        href="https://pf.kakao.com/_blxgib"
        target="_blank"
        className="rounded-full border-2 border-white bg-[#FFEB3B] p-[11px]"
        style={{ boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.11)' }}
      >
        <img src="/icons/kakao-btn.svg" alt="kakao channel button" className="h-6 w-6" />
      </Link>

      {/* top 버튼 */}
      <button
        onClick={scrollToTop}
        className="rounded-full border border-[#F3F3F3] bg-white p-[11px]"
        style={{ boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.11)' }}
      >
        <img src="/icons/top-btn.svg" alt="move to top button" className="h-6 w-6" />
      </button>
    </div>
  );
}
