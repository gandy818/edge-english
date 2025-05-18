import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* 섹션 1 */}
      <div className="mx-auto mb-[120px] mt-15 w-fit self-center">
        <Image
          src="/images/main/memoji.png"
          alt="memoji"
          width={304}
          height={168}
          className="justify-self-center"
        />
        <p
          className="mx-auto w-fit text-[32px] font-extrabold"
          style={{
            background: 'linear-gradient(90deg, #FCB045, #FD1D1D, #833AB4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          시에나
          <span className="font-normal"> X </span>
          탠저린
        </p>

        {/* 타이틀 */}
        <>
          <h1 className="mt-[26px] text-center text-5xl font-bold">
            엣지영어는 영어 교육 전문가들이 만든
          </h1>

          <div className="mt-4 flex justify-center gap-4">
            <h1 className="content-center text-5xl font-bold">1:1 미국 · 캐나다</h1>
            <Image
              src="/images/main/flag.png"
              alt="usa and canaga flags"
              width={186}
              height={90}
            />
            <h1 className="content-center text-5xl font-bold">화상영어 브랜드입니다.</h1>
          </div>

          <h2 className="mt-8 text-center text-2xl">
            13년차 영어 튜터 시에나 & 누적 조회수 300만+ 영어 컨텐츠 제작자 탠저린이 함께
            만들었어요.
          </h2>
          <h2 className="mt-8 text-center text-[32px] text-[#4A4A4A]">
            엣지영어에서 실력이 검증된{' '}
            <span className="font-semibold">‘북미 원어민 강사’</span>에게 합리적인
            가격으로 영어를 배워보세요!
          </h2>
        </>

        {/* 수강신청하기 */}
        <div className="mx-auto mt-10 w-fit">
          <button className="btn h-[58px] w-50 border-none bg-edge-yellow font-bold text-[#333] hover:bg-edge-yellow hover:text-[#333]">
            수강신청하기
          </button>
        </div>
      </div>

      {/* 섹션 2 탠저린샘의 10초 영어 */}
      <div className="h-[934px] bg-[#FFFAF6]"></div>

      {/* 섹션 3 수업 절차 */}
      <div className="mx-auto my-[120px] w-fit text-center">
        <h3 className="text-5xl font-bold text-[#140F33]">수업절차</h3>
        <div className="flex-center mt-10 flex-wrap">
          {/* step 01 */}
          <div className="rounded-3xl border border-dashed border-edge-yellow p-1">
            <div className="flex-center aspect-square h-48 flex-col gap-4 rounded-3xl bg-[#FFD4011A] p-6">
              <span className="badge border-none bg-[#AA96FF] p-2 font-montserrat text-xs font-medium text-white">
                STEP 01
              </span>
              <div>
                <p className="text-xl font-bold">수강 신청서 제출</p>
                <p className="h-11 text-sm text-edge-gray">
                  (신청 먼저, 결제는 나중에 할 수 있어요)
                </p>
              </div>
            </div>
          </div>

          {/* arrow */}
          <div className="px-6">
            <Image
              src={'/icons/main/yellow-right-arrow.svg'}
              width={24}
              height={24}
              alt="yellow-right-arrow.svg"
            />
          </div>

          {/* step 02 */}
          <div className="rounded-3xl border border-dashed border-edge-yellow p-1">
            <div className="flex-center aspect-square h-48 flex-col gap-4 rounded-3xl bg-[#FFD40126] p-6">
              <span className="badge border-none bg-[#AA96FF] p-2 font-montserrat text-xs font-medium text-white">
                STEP 02
              </span>
              <div>
                <p className="text-xl font-bold">수강 안내</p>
                <p className="h-11 text-sm text-edge-gray">(강사&교재 매칭)</p>
              </div>
            </div>
          </div>

          {/* arrow */}
          <div className="px-6">
            <Image
              src={'/icons/main/yellow-right-arrow.svg'}
              width={24}
              height={24}
              alt="yellow-right-arrow.svg"
            />
          </div>

          {/* step 03 */}
          <div className="rounded-3xl border border-dashed border-edge-yellow p-1">
            <div className="flex-center aspect-square h-48 flex-col gap-4 rounded-3xl bg-[#FFD4014D] p-6">
              <span className="badge border-none bg-[#AA96FF] p-2 font-montserrat text-xs font-medium text-white">
                STEP 03
              </span>
              <div>
                <p className="text-xl font-bold">결제</p>
                <p className="h-11 text-sm text-edge-gray"></p>
              </div>
            </div>
          </div>

          {/* arrow */}
          <div className="px-6">
            <Image
              src={'/icons/main/yellow-right-arrow.svg'}
              width={24}
              height={24}
              alt="yellow-right-arrow.svg"
            />
          </div>

          {/* step 04 */}
          <div className="rounded-3xl border border-dashed border-edge-yellow p-1">
            <div className="flex-center aspect-square h-48 flex-col gap-4 rounded-3xl bg-[#FFD40180] p-6">
              <span className="badge border-none bg-[#AA96FF] p-2 font-montserrat text-xs font-medium text-white">
                STEP 04
              </span>
              <div>
                <p className="text-xl font-bold">수업 시작</p>
                <p className="h-11 text-sm text-edge-gray"></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 섹션 4 화상영어 수강생들의 흔한 고민 */}
      <div className="relative aspect-[1440/1430] w-full">
        <Image
          src={'/images/main/main-chats.png'}
          alt="An infographic showing common online English learning concerns and how Edge English solves them with native tutors and review tools."
          fill
          className="object-contain"
        />
      </div>

      {/* 섹션 5 매번 작심삼일로 끝났다면? */}
      <div className="relative aspect-[1440/560] w-full">
        <Image
          src={'/images/main/we-can-help.png'}
          alt="we can help"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
