import Bubble from '@/components/common/bubble/Bubble';
import Link from 'next/link';

export default function PricePage() {
  return (
    <div className="bg-[#F3F6F8] py-[120px] max-md:py-[60px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
        {/* 타이틀 */}
        <div className="text-center px-4">
           <div className="mx-auto max-w-[820px]">
          <p className="text-[17px] leading-[1.9] font-medium text-[#AA96FF] max-md:text-[15px] max-md:leading-[1.8]">
        사실 저희가 특별한 시스템이 있는 건 아니에요. 대신 강사만큼은 정말 신경 써서 뽑고 있습니다.
        <br />
        10년차 영어 강사인 운영진이 직접 보고, 괜찮다고 느껴지는 분들만 함께하고 있고
        <br />
         미국·캐나다·호주 원어민 강사로만 채용하고 있습니다.  
          </p>
          <p className="mt-6 text-[17px] leading-[1.9] font-medium text-[#AA96FF] max-md:text-[15px] max-md:leading-[1.8]">
         수업도 편하게 말만 하는 게 아니라, 바로바로 교정해드리고 
         <br />
         그 내용도 노트로 남겨드리고 있어요.
         <br />저희가 큰 규모의 업체는 아니지만, 그만큼 한 분 한 분 오래 함께하고 싶은 마음으로 운영하고 있습니다.    
          </p></div>
          <h1 className="mt-10 text-4xl font-bold leading-tight max-md:mt-7 max-md:text-2xl">
            프리미엄 <br /> <span className="text-[#5542A5]">원어민 1:1 화상영어 </span>
            수업료
          </h1>
        </div>

        {/* 수강료 */}
        <div className="flex gap-8 px-4 max-md:flex-col">
          {/* 20분 화상영어 */}
          <div className="flex-1 rounded-2xl bg-white">
            {/* 타이틀 */}
            <div className="rounded-t-2xl bg-edge-purple p-6">
              <p className="text-2xl font-extrabold text-white max-md:text-base">
                <span className="font-montserrat text-white">20</span>분 화상영어
              </p>
            </div>

            <div className="flex items-center justify-between gap-3 border-x border-[#ddd] p-6">
              <div>
                <span className="text-nowrap rounded bg-[#FFEDB8] p-2 font-medium max-md:text-xs">
                  주 2회
                </span>
                <p className="mt-4 whitespace-nowrap font-medium tracking-tight text-[#666] max-md:text-sm">
                  월 횟수 <span className="font-bold text-[#666]">8</span>회
                </p>
              </div>
              <div>
                <p className="flex items-center gap-1 text-xl max-md:text-sm">
                  월
                  <span className="font-montserrat text-2xl font-extrabold max-md:text-lg">
                    178,000
                  </span>
                  원
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 border-x border-t border-[#ddd] p-6">
              <div>
                <span className="text-nowrap rounded bg-[#FFEDB8] p-2 font-medium max-md:text-xs">
                  주 3회
                </span>
                <p className="mt-4 whitespace-nowrap font-medium tracking-tight text-[#666] max-md:text-sm">
                  월 횟수 <span className="font-bold text-[#666]">12</span>회
                </p>
              </div>
              <div>
                <p className="flex items-center gap-1 text-xl max-md:text-sm">
                  월
                  <span className="font-montserrat text-2xl font-extrabold max-md:text-lg">
                    249,000
                  </span>
                  원
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 rounded-b-2xl border border-[#ddd] p-6">
              <div>
                <span className="text-nowrap rounded bg-[#FFEDB8] p-2 font-medium max-md:text-xs">
                  주 5회
                </span>
                <p className="mt-4 whitespace-nowrap font-medium tracking-tight text-[#666] max-md:text-sm">
                  월 횟수 <span className="font-bold text-[#666]">20</span>회
                </p>
              </div>
              <div>
                <p className="flex items-center gap-1 text-xl max-md:text-sm">
                  월
                  <span className="font-montserrat text-2xl font-extrabold max-md:text-lg">
                    370,000
                  </span>
                  원
                </p>
              </div>
            </div>
          </div>

          {/* 40분 화상영어 */}
          <div className="flex-1 rounded-2xl bg-white">
            {/* 타이틀 */}
            <div className="rounded-t-2xl bg-edge-yellow p-6">
              <p className="text-2xl font-extrabold max-md:text-base">
                <span className="font-montserrat">40</span>분 화상영어
              </p>
            </div>

            <div className="flex items-center justify-between gap-3 border-x border-[#ddd] p-6">
              <div>
                <span className="text-nowrap rounded bg-[#7D5FFF1A] p-2 font-medium max-md:text-xs">
                  주 2회
                </span>
                <p className="mt-4 whitespace-nowrap font-medium tracking-tight text-[#666] max-md:text-sm">
                  월 횟수 <span className="font-bold text-[#666]">8</span>회
                </p>
              </div>

              <div className="flex gap-2">
                {/* 인기 뱃지 */}
                <div className="flex items-center gap-1 whitespace-nowrap rounded-full bg-edge-purple p-2 font-extrabold text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1555_1020)">
                      <path
                        d="M14.9751 7.17815L12.1626 9.60502L13.0195 13.2344C13.0668 13.4314 13.0546 13.638 12.9845 13.8281C12.9144 14.0182 12.7896 14.1833 12.6257 14.3025C12.4618 14.4217 12.2663 14.4896 12.0639 14.4977C11.8614 14.5059 11.6611 14.4538 11.4882 14.3481L8.33199 12.4056L5.17387 14.3481C5.00101 14.4532 4.80093 14.5048 4.59883 14.4963C4.39673 14.4879 4.20163 14.4199 4.03812 14.3008C3.8746 14.1817 3.74998 14.0169 3.67993 13.8272C3.60989 13.6374 3.59756 13.4312 3.64449 13.2344L4.50449 9.60502L1.69199 7.17815C1.53905 7.04596 1.42845 6.87166 1.37398 6.67699C1.31952 6.48232 1.32361 6.27592 1.38575 6.08356C1.44789 5.89121 1.56533 5.72142 1.72339 5.59541C1.88145 5.4694 2.07313 5.39274 2.27449 5.37502L5.96199 5.07752L7.38449 1.63502C7.46149 1.44741 7.59254 1.28693 7.76097 1.17398C7.92941 1.06104 8.12763 1.00073 8.33043 1.00073C8.53323 1.00073 8.73145 1.06104 8.89989 1.17398C9.06832 1.28693 9.19937 1.44741 9.27637 1.63502L10.6982 5.07752L14.3857 5.37502C14.5875 5.39208 14.7797 5.46831 14.9384 5.59415C15.097 5.71999 15.215 5.88984 15.2775 6.08243C15.34 6.27502 15.3443 6.48178 15.2899 6.6768C15.2354 6.87182 15.1246 7.04644 14.9714 7.17877L14.9751 7.17815Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1555_1020">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0.332031)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  인기
                </div>
                <p className="flex items-center gap-1 text-xl max-md:text-sm">
                  월
                  <span className="font-montserrat text-2xl font-extrabold max-md:text-lg">
                    290,000
                  </span>
                  원
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 border-x border-t border-[#ddd] p-6">
              <div>
                <span className="text-nowrap rounded bg-[#7D5FFF1A] p-2 font-medium max-md:text-xs">
                  주 3회
                </span>
                <p className="mt-4 whitespace-nowrap font-medium tracking-tight text-[#666] max-md:text-sm">
                  월 횟수 <span className="font-bold text-[#666]">12</span>회
                </p>
              </div>
              <div>
                <p className="flex items-center gap-1 text-xl max-md:text-sm">
                  월
                  <span className="font-montserrat text-2xl font-extrabold max-md:text-lg">
                    420,000
                  </span>
                  원
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 rounded-b-2xl border border-[#ddd] p-6">
              <div>
                <span className="text-nowrap rounded bg-[#7D5FFF1A] p-2 font-medium max-md:text-xs">
                  주 5회
                </span>
                <p className="mt-4 whitespace-nowrap font-medium tracking-tight text-[#666] max-md:text-sm">
                  월 횟수 <span className="font-bold text-[#666]">20</span>회
                </p>
              </div>
              <div>
                <p className="flex items-center gap-1 text-xl max-md:text-sm">
                  월
                  <span className="font-montserrat text-2xl font-extrabold max-md:text-lg">
                    695,000
                  </span>
                  원
                </p>
              </div>
            </div>
          </div>

          {/* 50분 화상영어 */}
          <div className="relative flex-1 rounded-2xl bg-white">
            <Bubble
              text="주 1회 수업은 50분 수업만 가능합니다."
              top={-27}
              // left={30}
              // right={30}
              bg="#A0F4FF"
            />

            {/* 타이틀 */}
            <div className="rounded-t-2xl bg-[#09246B] p-6">
              <p className="text-2xl font-extrabold text-white max-md:text-base">
                <span className="font-montserrat text-white">50</span>분 화상영어
              </p>
            </div>

            <div className="flex items-center justify-between gap-3 border-x border-[#ddd] p-6">
              <div>
                <span className="text-nowrap rounded bg-[#09246B1A] p-2 font-medium max-md:text-xs">
                  주 1회
                </span>
                <p className="mt-4 whitespace-nowrap font-medium tracking-tight text-[#666] max-md:text-sm">
                  월 횟수 <span className="font-bold text-[#666]">4</span>회
                </p>
              </div>
              <div>
                <p className="flex items-center gap-1 text-xl max-md:text-sm">
                  월
                  <span className="font-montserrat text-2xl font-extrabold max-md:text-lg">
                    195,000
                  </span>
                  원
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 border-x border-t border-[#ddd] p-6">
              <div>
                <span className="text-nowrap rounded bg-[#09246B1A] p-2 font-medium max-md:text-xs">
                  주 2회
                </span>
                <p className="mt-4 whitespace-nowrap font-medium tracking-tight text-[#666] max-md:text-sm">
                  월 횟수 <span className="font-bold text-[#666]">8</span>회
                </p>
              </div>
              <div>
                <p className="flex items-center gap-1 text-xl max-md:text-sm">
                  월
                  <span className="font-montserrat text-2xl font-extrabold max-md:text-lg">
                    355,000
                  </span>
                  원
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 rounded-b-2xl border border-[#ddd] p-6">
              <div>
                <span className="text-nowrap rounded bg-[#09246B1A] p-2 font-medium max-md:text-xs">
                  주 3회
                </span>
                <p className="mt-4 whitespace-nowrap font-medium tracking-tight text-[#666] max-md:text-sm">
                  월 횟수 <span className="font-bold text-[#666]">12</span>회
                </p>
              </div>
              <div>
                <p className="flex items-center gap-1 text-xl max-md:text-sm">
                  월
                  <span className="font-montserrat text-2xl font-extrabold max-md:text-lg">
                    520,000
                  </span>
                  원
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 수강 신청하기 버튼 */}
        <div className="w-[228px] self-center text-center">
          <Bubble
            text="회원가입 없이, 30초면 신청 끝"
            bg="#333333"
            textClassName="text-white"
          />

          <Link
            href="https://forms.gle/arWZ6uzK3BFgaxM39"
            target="_blank"
            className="btn mx-auto mt-10 h-14 w-50 rounded-lg border-none bg-[#4A4A4A] px-14 py-5 font-bold text-white"
          >
            수강 신청하기
          </Link>
        </div>
      </div>
    </div>
  );
}
