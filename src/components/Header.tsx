'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import BubbleRightTail from './common/bubble/BubbleRightTail';

export default function Header() {
  const pathName = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const closeDrawer = () => setIsDrawerOpen(false);

  const openModal = () => {
    const modal = document.getElementById('experience_modal') as HTMLDialogElement; // 모달(dialog) 요소를 가져옴

    // 모달이 이미 열려 있다면, 먼저 닫음
    if (modal && modal.open) {
      modal.close();
    }

    modal.showModal();
  };

  return (
    <header className="flex-center sticky top-0 z-10 min-h-[70px] bg-white px-4 py-4">
      <div className="flex w-full items-center gap-12">
        <Link href="/">
          <img src="/images/logo.svg" alt="logo" className="min-w-20" />
        </Link>

        <div className="flex w-full items-center justify-between">
          <div className="flex gap-11 max-xl:gap-7 max-lg:gap-6 max-md:hidden">
            <Link
              href="/events"
              className={`text-nowrap ${pathName.startsWith('/events') ? 'font-bold' : 'font-medium text-edge-light'}`}
            >
              이벤트
            </Link>

            <Link
              href="/notice"
              className={`text-nowrap ${pathName.startsWith('/notice') ? 'font-bold' : 'font-medium text-edge-light'}`}
            >
              공지사항
            </Link>

            <Link
              href="/tutors"
              className={`text-nowrap ${pathName.startsWith('/tutors') ? 'font-bold' : 'font-medium text-edge-light'}`}
            >
              강사진
            </Link>

            <Link
              href="/books"
              className={`text-nowrap ${pathName.startsWith('/books') ? 'font-bold' : 'font-medium text-edge-light'}`}
            >
              교재
            </Link>

            <Link
              href="/faq"
              className={`text-nowrap ${pathName.startsWith('/faq') ? 'font-bold' : 'font-medium text-edge-light'}`}
            >
              자주 묻는 질문
            </Link>

            <Link
              href="/price"
              className={`text-nowrap ${pathName.startsWith('/price') ? 'font-bold' : 'font-medium text-edge-light'}`}
            >
              수업료
            </Link>
          </div>

          <div className="relative flex gap-2 max-md:hidden">
            <div className="max-lg:hidden">
              <BubbleRightTail
                text="회원가입 없이 간편 신청하기"
                bg="#1A1A1A"
                left={-205}
                top={4}
                textClassName="text-white text-sm"
              />
            </div>

            <button className="btn rounded-lg border-none bg-edge-yellow text-sm font-semibold text-[#333]">
              <Link href="https://forms.gle/rkvoS9ut3a5eSe659" target="_blank">
                수강신청
              </Link>
            </button>
            <button
              className="btn rounded-lg border-none bg-edge-gray text-sm font-semibold text-white"
              onClick={() => openModal()}
            >
              체험수업
            </button>
            <dialog id="experience_modal" className="modal">
              <div className="modal-box w-85">
                <h3 className="text-lg font-bold">
                  🧡 엣지영어는 ‘체험 수업’을 따로 운영하지 않아요.
                </h3>
                <p className="mt-6 text-sm font-normal text-[#333]">
                  일부 화상영어 업체에서는 레벨테스트나 체험 수업 전담 강사가 따로 있고,
                  막상 등록하면 다른 강사가 배정되는 경우가 많은데요,
                </p>
                <p className="mt-6 text-sm font-bold">🙌엣지영어에서는</p>
                <p className="mt-2 text-sm font-bold">
                  ✔처음 수업부터 실제 수업 그대로,
                  <br />
                  ✔첫 만남의 선생님이 계속 함께할 선생님입니다.
                </p>
                <p className="mt-6 text-sm font-bold">
                  그래서 따로 체험 수업은 없지만,
                  <br />
                  처음 수업이 마음에 들지 않으셨다면
                  <br />
                  👉첫 수업료만 제외하고 아무 조건 없이 환불해 드립니다. 편하게
                  시작해보세요!
                </p>
                <p className="mt-2 text-lg font-semibold">
                  20분 수업 9,900원
                  <br />
                  40분 수업 14,900원
                  <br />
                  50분 수업 17,900원
                </p>
                <p className="mt-6 text-center text-sm font-bold">
                  💡"체험이 아닌, 진짜 수업으로 시작하세요"💡
                </p>
                <button className="btn mt-12 w-full rounded-lg border-none bg-edge-gray py-6 text-sm font-semibold text-white">
                  수업신청 하러 가기
                </button>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>

        {/* 모바일 햄버거 메뉴 */}
        <div className="drawer drawer-end min-h-8 w-auto min-w-8 md:hidden">
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
          <div className="drawer-side z-30">
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
                  className={`active:bg-white! text-nowrap py-4 text-[22px] font-bold ${pathName.startsWith('/events') ? 'text-edge-yellow' : ''}`}
                  onClick={() => closeDrawer()}
                >
                  이벤트
                </Link>
              </li>

              <li>
                <Link
                  href="/notice"
                  className={`text-nowrap py-4 text-[22px] font-bold ${pathName.startsWith('/notice') ? 'text-edge-yellow' : ''}`}
                  onClick={() => closeDrawer()}
                >
                  공지사항
                </Link>
              </li>

              <li>
                <Link
                  href="/tutors"
                  className={`text-nowrap py-4 text-[22px] font-bold ${pathName.startsWith('/tutors') ? 'text-edge-yellow' : ']'}`}
                  onClick={() => closeDrawer()}
                >
                  강사진
                </Link>
              </li>

              <li>
                <Link
                  href="/books"
                  className={`text-nowrap py-4 text-[22px] font-bold ${pathName.startsWith('/books') ? 'text-edge-yellow' : ''}`}
                  onClick={() => closeDrawer()}
                >
                  교재
                </Link>
              </li>

              <li>
                <Link
                  href="/faq"
                  className={`text-nowrap py-4 text-[22px] font-bold ${pathName.startsWith('/faq') ? 'text-edge-yellow' : ''}`}
                  onClick={() => closeDrawer()}
                >
                  자주 묻는 질문
                </Link>
              </li>

              <li>
                <Link
                  href="/price"
                  className={`text-nowrap py-4 text-[22px] font-bold ${pathName.startsWith('/price') ? 'text-edge-yellow' : ''}`}
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
