import Link from 'next/link';
import TextDivider from './TextDivider';

export default function Footer() {
  return (
    <footer className="flex-center pb-[120px] pt-15 max-md:mb-16 max-md:px-4 max-md:pt-10">
      <div className="w-full max-w-[1200px]">
        {/* 로고 */}
        <Link href="/" className="inline-block">
          <img src="/images/logo.svg" alt="logo" />
        </Link>

        <div className="mt-4 flex items-center text-sm max-md:hidden">
          <p className="text-edge-gray">주소 : 인천광역시 길주 남로 143,2층 </p>
          <TextDivider />
          <p className="text-edge-gray">
            이메일 :{' '}
            <span className="font-montserrat text-edge-gray">support@edgeenglish.kr</span>
          </p>
        </div>

        {/* 모바일 */}
        <div className="mt-4 text-sm md:hidden">
          <p className="text-edge-gray">주소 : 인천광역시 길주 남로 143,2층 </p>
          <p className="mt-1 text-edge-gray">
            이메일 :{' '}
            <span className="font-montserrat text-edge-gray">support@edgeenglish.kr</span>
          </p>
        </div>

        <div className="mt-2 flex items-center text-sm text-edge-gray max-md:mt-1">
          <p className="text-edge-gray">대표 : 이진솔 </p>
          <TextDivider />
          <p className="text-edge-gray">
            사업자등록번호 :{' '}
            <span className="font-montserrat text-edge-gray">897-75-00421</span>{' '}
          </p>
        </div>

        <div className="mt-8 max-md:mt-6">
          <p className="font-montserrat text-[13px] text-edge-gray">
            COPYRIGHT © EDGEENGLISH All Rights Reserved.
          </p>
        </div>

        <div className="mt-4">
          <p className="font-montserrat text-lg font-extrabold leading-none text-edge-gray">
            010-5012-1553
          </p>
          <p className="mt-2 text-sm text-edge-gray">
            평일 09:00 ~ 18:00(점심시간 12:00~13:00), 주말/공휴일 휴무
          </p>
        </div>

        {/* sns */}
        <div className="mt-8 flex gap-3">
          <Link href="https://pf.kakao.com/_blxgib" target="_blank">
            <img src="/icons/footer/kakao.svg" alt="kakao" />
          </Link>
          <Link href="https://www.instagram.com/tangerine_english_" target="_blank">
            <img src="/icons/footer/instagram.svg" alt="instagram" />
          </Link>
          <Link href="/">
            <img src="/icons/footer/youtube.svg" alt="youtube" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
