'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathName = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <header className="flex-center h-[70px] max-md:px-4">
      <div className="flex w-full max-w-[1200px] max-md:justify-between md:gap-64">
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

        {/* 모바일 햄버거 메뉴 */}
        <div className="drawer drawer-end w-auto md:hidden">
          <input
            id="hamburger-menu"
            type="checkbox"
            className="drawer-toggle"
            checked={isDrawerOpen}
            onChange={() => setIsDrawerOpen(!isDrawerOpen)}
          />
          <div className="drawer-content">
            <label htmlFor="hamburger-menu">
              <img
                alt="mobile hamburger menu icon"
                src="/icons/mobile-menu.svg"
                className="cursor-pointer"
              />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="hamburger-menu"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu min-h-full w-80 bg-white p-4 text-base-content">
              {/* 헤더 */}
              <li>
                <div className="flex justify-between">
                  <Link href="/">
                    <img src="/images/logo.svg" alt="logo" />
                  </Link>
                  <img
                    alt="x icon"
                    src="/icons/x-btn.svg"
                    onClick={() => closeDrawer()}
                  />
                </div>
              </li>

              <li>
                <Link
                  href="/events"
                  className={`text-nowrap py-4 text-[22px] font-bold ${pathName.startsWith('/events') ? 'text-[#FFD401]' : 'text-[#333333]'}`}
                  onClick={() => closeDrawer()}
                >
                  이벤트
                </Link>
              </li>

              <li>
                <Link
                  href="/notice"
                  className={`text-nowrap py-4 text-[22px] font-bold ${pathName.startsWith('/notice') ? 'text-[#FFD401]' : 'text-[#333333]'}`}
                  onClick={() => closeDrawer()}
                >
                  공지사항
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className={`text-nowrap py-4 text-[22px] font-bold ${pathName.startsWith('/aaa') ? 'text-[#FFD401]' : 'text-[#333333]'}`}
                  onClick={() => closeDrawer()}
                >
                  강사진
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className={`text-nowrap py-4 text-[22px] font-bold ${pathName.startsWith('/aaa') ? 'text-[#FFD401]' : 'text-[#333333]'}`}
                  onClick={() => closeDrawer()}
                >
                  교재
                </Link>
              </li>

              <li>
                <Link
                  href="/faq"
                  className={`text-nowrap py-4 text-[22px] font-bold ${pathName.startsWith('/faq') ? 'text-[#FFD401]' : 'text-[#333333]'}`}
                  onClick={() => closeDrawer()}
                >
                  자주 묻는 질문
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className={`text-nowrap py-4 text-[22px] font-bold ${pathName.startsWith('/aaa') ? 'text-[#FFD401]' : 'text-[#333333]'}`}
                  onClick={() => closeDrawer()}
                >
                  수업료
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
