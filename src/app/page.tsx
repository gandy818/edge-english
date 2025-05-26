import Image from 'next/image';
import RealReviews from './components/main/RealReviews';

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
      <div
        className="p-[120px]"
        style={{
          background: `linear-gradient(180deg, rgba(238,199,5,0.20) 0%, rgba(254,254,254,0.04) 100%), #FFFAF6`,
        }}
      >
        <h3 className="text-center text-[50px] font-medium text-[#140F33]">
          화상영어 수강생들의 흔한 고민,
        </h3>
        <h4 className="text-center text-[50px] font-bold text-[#F80]">
          엣지영어는 이렇게 해결합니다!
        </h4>

        <div className="mt-10 flex flex-col gap-4 px-15">
          {/* 말풍선 01 */}
          <div className="flex gap-2">
            <Image
              src={'/icons/main/student01.png'}
              alt="student 1 memoji"
              width={96}
              height={96}
              className="h-24 shrink-0 self-end"
            />
            <div className="chat chat-start flex-1">
              <div className="chat-bubble rounded-3xl bg-white px-7 py-4.5 text-2xl font-semibold text-[#333] shadow-lg">
                강사만 계속 말하는 것 같아요.
              </div>
            </div>
          </div>

          {/* 튜터 말풍선 01 */}
          <div className="flex gap-2">
            <div className="chat chat-end flex-1">
              <div className="chat-bubble rounded-3xl bg-edge-yellow px-7 py-4.5 text-2xl font-semibold text-[#333] shadow-lg">
                엣지영어 튜터는 학생의 말하기를 이끌어내도록 훈련된 원어민이에요. <br />{' '}
                수업 중 함께 말할 수 있는 교재를 사용하니까, 듣기만 하는 수업과는 달라요!
              </div>
            </div>
            <Image
              src={'/icons/main/tutor01.png'}
              alt="tutor memoji"
              width={96}
              height={96}
              className="h-24 shrink-0 self-end"
            />
          </div>

          {/* 말풍선 02 */}
          <div className="flex gap-2">
            <Image
              src={'/icons/main/student02.png'}
              alt="student 2 memoji"
              width={96}
              height={96}
              className="h-24 shrink-0 self-end"
            />
            <div className="chat chat-start flex-1">
              <div className="chat-bubble rounded-3xl bg-white px-7 py-4.5 text-2xl font-semibold text-[#333] shadow-lg">
                강사의 발음이 아쉬워요.
              </div>
            </div>
          </div>

          {/* 튜터 말풍선 02 */}
          <div className="flex gap-2">
            <div className="chat chat-end flex-1">
              <div className="chat-bubble rounded-3xl bg-edge-yellow px-7 py-4.5 text-2xl font-semibold text-[#333] shadow-lg">
                엣지영어 강사는 100% 미국·캐나다 출신 원어민으로, <br /> 어느 튜터를
                만나도 북미식 발음을 배울 수 있어요.
              </div>
            </div>
            <Image
              src={'/icons/main/tutor01.png'}
              alt="tutor memoji"
              width={96}
              height={96}
              className="h-24 shrink-0 self-end"
            />
          </div>

          {/* 말풍선 03 */}
          <div className="flex gap-2">
            <Image
              src={'/icons/main/student03.png'}
              alt="student 3 memoji"
              width={96}
              height={96}
              className="h-24 shrink-0 self-end"
            />
            <div className="chat chat-start flex-1">
              <div className="chat-bubble rounded-3xl bg-white px-7 py-4.5 text-2xl font-semibold text-[#333] shadow-lg">
                강사의 전문성이 부족해 보여요.
              </div>
            </div>
          </div>

          {/* 튜터 말풍선 03 */}
          <div className="flex gap-2">
            <div className="chat chat-end flex-1">
              <div className="chat-bubble rounded-3xl bg-edge-yellow px-7 py-4.5 text-2xl font-semibold text-[#333] shadow-lg">
                엣지영어의 모든 강사는 TESOL/TEFL(국제 영어 교육 자격증)을 기본으로
                보유하고 있으며, <br /> 철저한 5단계 검증 절차를 모두 통과한 선생님만
                채용합니다.
              </div>
            </div>
            <Image
              src={'/icons/main/tutor01.png'}
              alt="tutor memoji"
              width={96}
              height={96}
              className="h-24 shrink-0 self-end"
            />
          </div>

          {/* 말풍선 04 */}
          <div className="flex gap-2">
            <Image
              src={'/icons/main/student04.png'}
              alt="student 4 memoji"
              width={96}
              height={96}
              className="h-24 shrink-0 self-end"
            />
            <div className="chat chat-start flex-1">
              <div className="chat-bubble rounded-3xl bg-white px-7 py-4.5 text-2xl font-semibold text-[#333] shadow-lg">
                수업 때 배운 표현을 다시 쓰고 싶은데, 정확히 뭐였는지 생각이 안 나요.
              </div>
            </div>
          </div>

          {/* 튜터 말풍선 04 */}
          <div className="flex gap-2">
            <div className="chat chat-end flex-1">
              <div className="chat-bubble rounded-3xl bg-edge-yellow px-7 py-4.5 text-2xl font-semibold text-[#333] shadow-lg">
                수업에서 배운 내용을 놓치지 않도록, 모든 수업 후 복습 노트를 제공합니다.{' '}
                <br /> 중요한 표현을 다시 확인하고, 배운 영어를 확실히 내 것으로 만들 수
                있어요!
              </div>
            </div>
            <Image
              src={'/icons/main/tutor01.png'}
              alt="tutor memoji"
              width={96}
              height={96}
              className="h-24 shrink-0 self-end"
            />
          </div>
        </div>
      </div>

      {/* 섹션 5 매번 작심삼일로 끝났다면? */}
      <div
        className="relative aspect-[1440/560] w-full bg-contain bg-no-repeat px-36 py-32"
        style={{ backgroundImage: "url('/images/main/we-can-help-bg.png')" }}
      >
        <p
          className="text- text-center text-[56px] font-bold text-white"
          style={{ textShadow: '0px 0px 10px rgba(0, 0, 0, 0.50)' }}
        >
          영어, 매번 작심삼일로 끝났다면? <br />
          포기하지 않도록 엣지영어가 도와드릴게요!
        </p>
        <p
          className="mt-8 text-center text-[32px] font-medium text-white"
          style={{ textShadow: '0px 0px 10px rgba(0, 0, 0, 0.50)' }}
        >
          운영진들의 오랜 강사 경력과 노하우를 바탕으로 완성된 학습시스템을 소개합니다.
        </p>
      </div>

      {/* 섹션 6 지속 가능한 영어 학습 시스템 */}
      <>
        {/* 포인트 1 */}
        <div className="bg-[#F3F6F8] px-[180px] pb-[140px] pt-[100px]">
          <h3 className="pb-15 text-center text-[50px] font-bold text-[#140F33]">
            지속 가능한 영어 학습 시스템
          </h3>
          <div className="flex justify-between gap-16">
            <div className="flex-1">
              <span className="block h-[61px] w-fit rounded-full border-none bg-edge-yellow px-6 py-4 text-2xl font-bold text-[#333]">
                포인트1
              </span>
              <h4 className="pt-6 text-[50px] font-bold leading-[120%] text-[#140F33]">
                고정제 수업으로 <br />
                만드는 영어 루틴
              </h4>
              <p className="mt-8 text-2xl leading-[140%] text-edge-gray">
                정해진 요일과 시간에 꾸준히 진행되는 고정제 수업은 바쁜 일상 속에서도
                영어를 포기하지 않도록 강력한 동기부여가 됩니다.
              </p>
            </div>

            <div className="flex-center flex-1">
              <Image
                src={'/images/main/point01.png'}
                alt="point 01"
                width={580}
                height={400}
              />
            </div>
          </div>
        </div>

        {/* 포인트 2 */}
        <div className="px-[180px] pb-[140px] pt-[100px]">
          <div className="flex justify-between gap-16">
            <div className="flex-center flex-1">
              <Image
                src={'/images/main/point02.png'}
                alt="point 02"
                width={580}
                height={400}
              />
            </div>

            <div className="flex-1">
              <span className="block h-[61px] w-fit rounded-full border-none bg-edge-yellow px-6 py-4 text-2xl font-bold text-[#333]">
                포인트2
              </span>
              <h4 className="pt-6 text-[50px] font-bold leading-[120%] text-[#140F33]">
                다양한 주제의 <br />
                고퀄리티 교재 완비
              </h4>
              <p className="mt-8 text-2xl leading-[140%] text-edge-gray">
                비즈니스, 여행, 일상 등 다양한 상황의 영어를 연습할 수 있는 세계적으로
                인정받은 고품질 교재를 사용합니다.
              </p>
              <p className="mt-2 text-2xl text-[#a4a4a4]">
                * 대부분 옥스포드 출판 교재 사용
              </p>
            </div>
          </div>
        </div>

        {/* 포인트 3 */}
        <div className="bg-[#F3F6F8] px-[180px] pb-[140px] pt-[100px]">
          <div className="flex justify-between gap-16">
            <div className="flex-1">
              <span className="block h-[61px] w-fit rounded-full border-none bg-edge-yellow px-6 py-4 text-2xl font-bold text-[#333]">
                포인트3
              </span>
              <h4 className="pt-6 text-[50px] font-bold leading-[120%] text-[#140F33]">
                전원 미국·캐나다 출신 <br />
                원어민 강사진
              </h4>
              <p className="mt-8 text-2xl leading-[140%] text-edge-gray">
                영어에는 다양한 억양이 있지만, 한국 학습자에게 가장 익숙한 북미식 발음을
                사용하는 튜터만으로 구성되어있어요.
              </p>
            </div>

            <div className="flex-center flex-1">
              <Image
                src={'/images/main/point03.png'}
                alt="point 03"
                width={580}
                height={400}
              />
            </div>
          </div>
        </div>
      </>

      {/* 섹션7 솔직 찐후기 */}
      <div className="py-[120px] text-center">
        <p className="px-[140px] text-[22px] font-semibold text-edge-purple">
          솔직 찐후기
        </p>
        <h3 className="mt-4 px-[140px] text-[50px] font-bold text-[#140F33]">
          왜 모두 엣지영어에 만족할까요?
        </h3>

        <RealReviews />
      </div>

      {/* 섹션8 */}
      <div
        className="w-full py-15"
        style={{ background: 'linear-gradient(115deg, #F3F6F8 0%, #D9D0FF 100%)' }}
      >
        <div>
          <img
            className="mx-auto justify-self-center"
            src="/icons/main/check.svg"
            alt="보라색 체크 표시 아이콘"
            width={64}
            height={64}
          />
          <h3
            className="mx-auto w-fit text-[50px] font-bold"
            style={{
              background: 'linear-gradient(89deg, #322585 19.7%, #7D5FFF 76.42%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            엣지영어만의 특별한 디테일
          </h3>
          <h4 className="mx-auto w-fit text-2xl text-[#A4A4A4]">
            한국인이 영어에서 느끼는 어려움을 누구보다 잘 아니까. <br /> 초급부터 고급까지
            모든 학습자를 만족 시키는 엣지 포인트!
          </h4>

          <div className="relative mx-[110px] mt-6 flex h-[90px] w-full rounded-2xl">
            {/* POINT 01 */}
            <div
              className="absolute left-0 flex h-full w-[22rem] items-center justify-center text-xl font-bold text-white"
              style={{
                background: 'linear-gradient(90deg, #b99cff 0%, #7D5FFF 100%)',
                clipPath: 'polygon(0 0, 93% 0, 100% 50%, 93% 100%, 0 100%, 0 10%)',
                borderTopLeftRadius: '24px',
                borderBottomLeftRadius: '24px',
              }}
              // clipPath: 'polygon(0 10%, 93% 0, 100% 50%, 93% 100%, 0 90%, 0 10%)',
            >
              POINT 01
            </div>
            {/* POINT 02 */}
            <div
              className="absolute left-[20rem] flex h-full w-[22rem] items-center justify-center text-xl font-bold text-white opacity-60"
              style={{
                background: '#6C53BC',
                clipPath: 'polygon(0 0, 93% 0, 100% 50%, 93% 100%, 0 100%, 7% 50%)',
              }}
            >
              POINT 02
            </div>
            {/* POINT 03 */}
            <div
              className="absolute left-[40rem] flex h-full w-[22rem] items-center justify-center text-xl font-bold text-white opacity-60"
              style={{
                background: '#5B44A3',
                clipPath: 'polygon(0 0, 93% 0, 100% 50%, 93% 100%, 0 100%, 7% 50%)',
              }}
            >
              POINT 03
            </div>
            {/* POINT 04 */}
            <div
              className="absolute left-[60rem] flex h-full w-[22rem] items-center justify-center text-xl font-bold text-white opacity-60"
              style={{
                background: '#6C53BC',
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 7% 50%)',
                borderTopRightRadius: '24px',
                borderBottomRightRadius: '24px',
              }}
            >
              POINT 04
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
