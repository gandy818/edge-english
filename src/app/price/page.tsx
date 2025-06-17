import Bubble from '@/components/common/bubble/Bubble';

export default function PricePage() {
  return (
    <div className="bg-[#F3F6F8] py-[120px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
        {/* 타이틀 */}
        <div className="text-center">
          <p className="font-montserrat text-[22px] font-semibold text-[#AA96FF] max-md:text-base">
            EDGE ENGLISH
          </p>
          <h1 className="mt-4 text-5xl font-bold leading-tight max-md:text-2xl">
            엣지있는 <br /> <span className="text-[#5542A5]">원어민 1:1 화상영어</span>
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
                <p className="mt-4 font-medium tracking-tight text-[#666] max-md:text-sm">
                  월 횟수 <span className="font-bold text-[#666]">8</span>회
                </p>
              </div>
              <div>
                <p className="flex items-center gap-1 text-xl max-md:text-sm">
                  월
                  <span className="font-montserrat text-2xl font-extrabold max-md:text-lg">
                    130,000
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
                <p className="mt-4 font-medium tracking-tight text-[#666] max-md:text-sm">
                  월 횟수 <span className="font-bold text-[#666]">12</span>회
                </p>
              </div>
              <div>
                <p className="flex items-center gap-1 text-xl max-md:text-sm">
                  월
                  <span className="font-montserrat text-2xl font-extrabold max-md:text-lg">
                    188,000
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
                <p className="mt-4 font-medium tracking-tight text-[#666] max-md:text-sm">
                  월 횟수 <span className="font-bold text-[#666]">20</span>회
                </p>
              </div>
              <div>
                <p className="flex items-center gap-1 text-xl max-md:text-sm">
                  월
                  <span className="font-montserrat text-2xl font-extrabold max-md:text-lg">
                    299,000
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
                <p className="mt-4 font-medium tracking-tight text-[#666] max-md:text-sm">
                  월 횟수 <span className="font-bold text-[#666]">8</span>회
                </p>
              </div>
              <div>
                <p className="flex items-center gap-1 text-xl max-md:text-sm">
                  월
                  <span className="font-montserrat text-2xl font-extrabold max-md:text-lg">
                    237,000
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
                <p className="mt-4 font-medium tracking-tight text-[#666] max-md:text-sm">
                  월 횟수 <span className="font-bold text-[#666]">12</span>회
                </p>
              </div>
              <div>
                <p className="flex items-center gap-1 text-xl max-md:text-sm">
                  월
                  <span className="font-montserrat text-2xl font-extrabold max-md:text-lg">
                    346,000
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
                <p className="mt-4 font-medium tracking-tight text-[#666] max-md:text-sm">
                  월 횟수 <span className="font-bold text-[#666]">20</span>회
                </p>
              </div>
              <div>
                <p className="flex items-center gap-1 text-xl max-md:text-sm">
                  월
                  <span className="font-montserrat text-2xl font-extrabold max-md:text-lg">
                    560,000
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
                <p className="mt-4 font-medium tracking-tight text-[#666] max-md:text-sm">
                  월 횟수 <span className="font-bold text-[#666]">4</span>회
                </p>
              </div>
              <div>
                <p className="flex items-center gap-1 text-xl max-md:text-sm">
                  월
                  <span className="font-montserrat text-2xl font-extrabold max-md:text-lg">
                    165,000
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
                <p className="mt-4 font-medium tracking-tight text-[#666] max-md:text-sm">
                  월 횟수 <span className="font-bold text-[#666]">8</span>회
                </p>
              </div>
              <div>
                <p className="flex items-center gap-1 text-xl max-md:text-sm">
                  월
                  <span className="font-montserrat text-2xl font-extrabold max-md:text-lg">
                    299,000
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
                <p className="mt-4 font-medium tracking-tight text-[#666] max-md:text-sm">
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
          </div>
        </div>

        {/* 수강 신청하기 버튼 */}
        <div className="w-[228px] self-center text-center">
          <Bubble
            text="회원가입 없이, 30초면 신청 끝"
            bg="#333333"
            textClassName="text-white"
          />

          <button className="btn mx-auto mt-10 h-14 w-50 rounded-lg border-none bg-[#4A4A4A] px-14 py-5 font-bold text-white">
            수강 신청하기
          </button>
        </div>
      </div>
    </div>
  );
}
