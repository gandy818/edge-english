'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathName = usePathname();

  return (
    <header className="flex-center h-[70px]">
      <div className="flex w-full max-w-[1200px] gap-64">
        <img src="/images/logo.svg" />

        {/* gnb */}
        <div className="flex gap-11">
          <Link
            href="/events"
            className={`${pathName.startsWith('/events') ? 'font-bold text-[#333]' : 'font-medium text-[#bbb]'}`}
          >
            이벤트
          </Link>

          <Link
            href="/notice"
            className={`${pathName.startsWith('/notice') ? 'font-bold text-[#333]' : 'font-medium text-[#bbb]'}`}
          >
            공지사항
          </Link>

          <Link href="/" className="font-medium text-[#bbb]">
            강사진
          </Link>

          <Link href="/" className="font-medium text-[#bbb]">
            교재
          </Link>

          <Link href="/" className="font-medium text-[#bbb]">
            자주 묻는 질문
          </Link>

          <Link href="/" className="font-medium text-[#bbb]">
            수업료
          </Link>
        </div>
      </div>
    </header>
  );
}
