'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathName = usePathname();

  return (
    <header className="flex-center h-[70px] max-md:px-4">
      <div className="flex w-full max-w-[1200px] gap-64">
        <Link href="/">
          <img src="/images/logo.svg" alt="logo" />
        </Link>

        {/* gnb */}
        <div className="flex gap-11 max-md:hidden">
          <Link
            href="/events"
            className={`text-nowrap ${pathName.startsWith('/events') ? 'font-bold text-[#333]' : 'font-medium text-[#bbb]'}`}
          >
            이벤트
          </Link>

          <Link
            href="/notice"
            className={`text-nowrap ${pathName.startsWith('/notice') ? 'font-bold text-[#333]' : 'font-medium text-[#bbb]'}`}
          >
            공지사항
          </Link>

          <Link href="/" className="text-nowrap font-medium text-[#bbb]">
            강사진
          </Link>

          <Link href="/" className="text-nowrap font-medium text-[#bbb]">
            교재
          </Link>

          <Link
            href="/faq"
            className={`text-nowrap ${pathName.startsWith('/faq') ? 'font-bold text-[#333]' : 'font-medium text-[#bbb]'}`}
          >
            자주 묻는 질문
          </Link>

          <Link href="/" className="text-nowrap font-medium text-[#bbb]">
            수업료
          </Link>
        </div>
      </div>
    </header>
  );
}
