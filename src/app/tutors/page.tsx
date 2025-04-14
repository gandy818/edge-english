import TutorGallery from '@/components/tutros/TutorGallery';
import { TutorType } from '@/types/TutorType';
import Link from 'next/link';

export default async function TutorPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/data/tutors.json`);

  const tutorList: TutorType[] = await res.json();

  return (
    <div className="mx-auto">
      <div className="max-md:mt-15 mt-[120px] flex flex-col justify-center">
        {/* 섹션 1 */}
        <>
          <div className="flex flex-wrap justify-center text-5xl font-bold leading-[150%] max-md:flex-col max-md:text-[32px]">
            <p className="self-center md:pr-4">TESOL/TEFL을 보유한</p>
            <p className="text-edge-purple self-center md:pr-4">100% 미국·캐나다</p>
            <p className="self-center">원어민 강사진</p>
          </div>
          <div className="mt-6 flex justify-center">
            <p className="text-center text-2xl font-normal text-[#4A4A4A] max-md:text-base">
              강사 선택 고민될 땐?&nbsp;
              <br className="md:hidden" />
              엣지 운영진이 도와드릴게요!
            </p>
          </div>
          <div className="flex justify-center">
            <Link
              href="https://pf.kakao.com/_blxgib"
              target="_blank"
              className="mb-15 mt-10 flex flex-row justify-center rounded-lg bg-[#FFEB3B] px-[40px] py-[16px]"
            >
              <img
                src="/icons/floating/kakao-btn.svg"
                alt="kakao channel button"
                className="h-6 w-6"
              />
              <p className="pl-2 font-bold">채팅상담 하기</p>
            </Link>
          </div>
          <TutorGallery tutorList={tutorList} />
        </>

        {/* 섹션 2 웹 */}
        <div className="mt-15 max-md:hidden">
          <div className="flex min-h-[448px] justify-end bg-[url(/images/tutor/bg-tutor.png)] bg-cover bg-center">
            <div className="self-center pr-[120px]">
              <p className="text-5xl font-bold leading-relaxed text-white">
                실력과 인성 모두 확인된 튜터만
              </p>
              <p className="text-[22px] font-normal text-white">
                엣지영어는 철저한 5단계 검증 과정을 통해 강사를 채용해요.
              </p>
              <br />
              <p className="text-[22px] font-normal text-white">
                서면 인터뷰와 서류 심사로 기본 자격을 확인하고,
              </p>
              <p className="text-[22px] font-normal text-white">
                2:1 심층 면접에서 인성과 소통 능력, 책임감을 꼼꼼히 살펴봅니다.
              </p>
              <p className="text-[22px] font-normal text-white">
                면접을 통과한 강사는 실전 수업 평가와 2개월 집중 모니터링을 거쳐야 정식
                튜터가 됩니다.
              </p>
              <br />
              <p className="text-[22px] font-normal text-white">
                학습자들이 믿고 배울 수 있도록, 엄격한 절차와 기준으로 강사를 선발합니다.
              </p>
            </div>
          </div>
        </div>

        {/* 섹션 2 모바일 */}
        <div className="bg-mobile-tutor sm:bg-tablet-tutor mt-15 flex min-h-[1000px] justify-end bg-cover bg-center md:hidden">
          <div className="flex min-h-[1000px] justify-end">
            <div className="pt-15 px-4">
              <p className="text-[32px] font-bold leading-tight text-white">
                실력과 인성
              </p>
              <p className="text-[32px] font-bold leading-relaxed text-white">
                모두 확인된 튜터만
              </p>
              <br />
              <p className="text-lg text-white">
                엣지영어는 철저한 5단계 검증 과정을 통해 강사를 채용해요.
              </p>
              <br />
              <p className="text-lg text-white">
                서면 인터뷰와 서류 심사를 통해 기본 자격을 확인하고, 2:1 심층 면접에서
                인성, 소통능력, 책임감을 꼼꼼히 살펴봅니다. 면접을 통과한 후보는 시범 강의
                평가를 거쳐 정식 튜터가 됩니다.
              </p>
              <br />
              <p className="text-lg text-white">
                학습자들이 믿고 배울 수 있도록, 엄격한 절차와 기준으로 강사를 선발합니다.
              </p>
            </div>
          </div>
        </div>

        {/* 섹션 3 웹 */}
        <div className="mt-[120px] flex flex-col items-center max-md:hidden">
          <p className="text-5xl font-bold">엣지영어 5단계 강사 선발 과정</p>
          <div className="mt-15 flex flex-row justify-start">
            {[1, 2, 3, 4, 5].map((e) => (
              <div key={e} className="flex-grow">
                <img src={`/icons/tutor/step-${e}.svg`} />
              </div>
            ))}
          </div>
        </div>

        {/* 섹션 3 모바일 */}
        <div className="mt-15 flex flex-col items-center text-center md:hidden">
          <p className="text-[32px] font-bold">
            엣지영어 <br /> 5단계 강사 선발 과정
          </p>
          <div className="mt-15 flex flex-col justify-center">
            {[1, 2, 3, 4, 5].map((e) => (
              <div key={e}>
                <img src={`/icons/tutor/mobile-step-${e}.svg`} />
                {e === 5 ? (
                  <div></div>
                ) : (
                  <div className="my-4 flex justify-center">
                    <img src="/icons/tutor/arrow-down.svg" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 섹션 4 웹 */}
        <div className="mt-[120px] flex w-full flex-col bg-[#F3F6F8] py-[120px] max-md:hidden">
          <p className="self-center text-5xl font-bold">
            어떤 튜터를 만나도 안심할 수 있어요.
          </p>
          <p className="mt-6 self-center text-2xl font-normal text-[#4A4A4A]">
            엣지영어의 모든 튜터는 아래 자격 요건을 모두 충족해요.
          </p>
          <div className="mt-[40px] grid w-full max-w-[1200px] grid-cols-2 items-center gap-4 self-center">
            <div className="flex flex-grow items-center rounded-lg border bg-white px-10 py-8 text-2xl font-medium">
              <img src="/icons/tutor/check.svg" className="mr-[16px]" />
              미국
              <span className="text-[#D2D2D2]">・</span>
              캐나다 출신
            </div>
            <div className="flex flex-grow items-center rounded-lg border bg-white px-10 py-8 text-2xl font-medium">
              <img src="/icons/tutor/check.svg" className="mr-[16px]" />
              TESOL/TEFL 국제 영어교육 자격증 보유
            </div>{' '}
            <div className="flex flex-grow items-center rounded-lg border bg-white px-10 py-8 text-2xl font-medium">
              <img src="/icons/tutor/check.svg" className="mr-[16px]" />
              영어 교육 경력 1년 이상
            </div>{' '}
            <div className="flex flex-grow items-center rounded-lg border bg-white px-10 py-8 text-2xl font-medium">
              <img src="/icons/tutor/check.svg" className="mr-[16px]" />
              시범 강의 평가 통과
            </div>
          </div>
        </div>

        {/* 섹션 4 모바일 */}
        <div className="mt-15 py-15 flex w-full flex-col bg-[#F3F6F8] md:hidden">
          <p className="self-center text-center text-[32px] font-bold">
            어떤 튜터를 만나도
            <br />
            안심할 수 있어요.
          </p>
          <p className="mt-4 self-center text-center text-base font-normal text-[#4A4A4A]">
            엣지영어의 모든 튜터는
            <br />
            아래 자격 요건을 모두 충족해요.
          </p>
          <div className="mt-[40px] flex w-full flex-col justify-stretch gap-4 self-center px-6">
            <div className="flex flex-grow items-center rounded-lg border bg-white px-4 py-6 text-lg font-medium">
              <img src="/icons/tutor/check.svg" className="mr-2 h-6 w-6" />
              미국
              <span className="text-[#D2D2D2]">・</span>
              캐나다 출신
            </div>
            <div className="flex flex-grow items-center rounded-lg border bg-white px-4 py-6 text-lg font-medium">
              <img src="/icons/tutor/check.svg" className="mr-2 h-6 w-6" />
              TESOL/TEFL 국제 영어교육 자격증 보유
            </div>{' '}
            <div className="flex flex-grow items-center rounded-lg border bg-white px-4 py-6 text-lg font-medium">
              <img src="/icons/tutor/check.svg" className="mr-2 h-6 w-6" />
              영어 교육 경력 1년 이상
            </div>{' '}
            <div className="flex flex-grow items-center rounded-lg border bg-white px-4 py-6 text-lg font-medium">
              <img src="/icons/tutor/check.svg" className="mr-2 h-6 w-6" />
              시범 강의 평가 통과
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
