import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* 섹션 1 */}
      <div className="mx-auto w-fit self-center">
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

          <h2 className="mt-8 text-center text-[32px] text-[#4A4A4A]">
            엣지영어에서 실력이 검증된{' '}
            <span className="font-semibold">‘북미 원어민 강사’</span>에게 합리적인
            가격으로 영어를 배워보세요!
          </h2>
        </>

        {/* 수강신청하기 */}
        <div className="mx-auto mt-10 w-fit">
          <button className="btn h-[58px] w-50 border-none bg-edge-yellow font-bold hover:bg-edge-yellow hover:text-[#333]">
            수강신청하기
          </button>
        </div>
      </div>
    </div>
  );
}
