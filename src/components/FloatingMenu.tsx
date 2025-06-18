'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function FloatingMenu() {
  const pathName = usePathname();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 부드럽게 스크롤
    });
  };

  return (
    <div>
      {pathName === '/' && (
        <Link
          href="https://forms.gle/rkvoS9ut3a5eSe659"
          target="_blank"
          className="fixed bottom-4 left-1/2 z-[1] -translate-x-1/2 whitespace-nowrap rounded-full bg-edge-yellow px-10 py-4 font-semibold shadow-md"
        >
          회원가입 없이 간편 수강신청하기
        </Link>
      )}
      <div className="fixed bottom-[4.5rem] right-4.5 z-[19] flex flex-col gap-2 xs:bottom-10 xs:right-10">
        {/* 카카오 버튼 */}
        <Link
          href="https://pf.kakao.com/_blxgib"
          target="_blank"
          className="rounded-full border-2 border-white bg-[#FFEB3B] p-[11px]"
          style={{ boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.11)' }}
        >
          <img
            src="/icons/floating/kakao-btn.svg"
            alt="kakao channel button"
            className="h-6 w-6"
          />
        </Link>

        {/* top 버튼 */}
        <button
          onClick={scrollToTop}
          className="rounded-full border border-[#F3F3F3] bg-white p-[11px]"
          style={{ boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.11)' }}
        >
          <img
            src="/icons/floating/top-btn.svg"
            alt="move to top button"
            className="h-6 w-6"
          />
        </button>
      </div>
    </div>
  );
}
