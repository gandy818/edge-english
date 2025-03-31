'use client';

import { TutorType } from '@/types/TutorType';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function TutorPage() {
  const [tutorList, setTutorList] = useState<TutorType[]>([]);
  const [selectedTutor, setSelectedTutor] = useState<TutorType>();

  const openTutorModal = (name: string) => {
    const tutor: TutorType = tutorList.filter((e) => e.name === name)[0];

    setSelectedTutor(tutor);

    (document.getElementById('tutor_modal') as HTMLDialogElement).showModal();
  };

  const closeTutorModal = () => {
    const modal = document.getElementById('tutor_modal') as HTMLDialogElement;

    modal?.close();
  };

  useEffect(() => {
    const getTutorList = async () => {
      try {
        const res = await axios.get('/data/tutor.json');

        setTutorList(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    getTutorList();
  }, []);

  return (
    <div className="mx-auto">
      <div className="mt-[120px] flex flex-col justify-center max-md:mt-[60px]">
        {/* 섹션 1 */}
        <>
          <div className="flex flex-wrap justify-center text-5xl font-bold leading-[150%] max-md:flex-col max-md:text-[32px]">
            <p className="self-center md:pr-4">TESOL/TEFL을 보유한</p>
            <p className="self-center text-[#7D5FFF] md:pr-4">100% 미국·캐나다</p>
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
                src="/icons/kakao-btn.svg"
                alt="kakao channel button"
                className="h-6 w-6"
              />
              <p className="pl-2 font-bold">채팅상담 하기</p>
            </Link>
          </div>

          <div className="mt-[60px] flex max-w-[1200px] flex-wrap justify-center gap-4 self-center max-md:flex-col max-md:gap-10">
            {tutorList.map((tutor) => (
              <div
                key={tutor.name}
                className="flex w-72 cursor-pointer flex-col justify-start"
                onClick={() => openTutorModal(tutor.name)}
              >
                <img className="rounded-2xl" src={tutor.img} alt={tutor.name} />
                <div className="flex flex-row items-center justify-center pt-6">
                  <img src="/icons/usa.svg" />
                  <p className="pl-2 font-montserrat text-2xl font-bold">{tutor.name}</p>
                </div>
                <p className="mt-2 self-center text-center font-bold">{tutor.desc}</p>
                <div className="mt-4 flex flex-wrap justify-center gap-1">
                  {tutor.tags.map((tag) => (
                    <div
                      key={tag}
                      className="rounded-lg bg-[#7D5FFF] bg-opacity-10 px-3 py-2 text-xs font-semibold text-[#5542A5]"
                    >
                      #{tag}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
        {/* 기존 모달
       <dialog id="tutor_modal" className="modal">
          <div className="modal-box max-w-full focus-visible:outline-none max-md:h-full max-md:max-h-full max-md:w-full max-md:rounded-none">
            <div>
              <div className="flex flex-row justify-between">
                <div className="flex-center text-[28px] font-bold">
                  튜터&nbsp;
                  <span className="text-2xl text-[#7D5FFF]">
                    {selectedTutor?.name ?? ''}
                  </span>
                </div>

                <button
                  onClick={() => {
                    closeTutorModal();
                  }}
                >
                  <img src="/icons/x-btn.svg" />
                </button>
              </div>

              <div className="mt-6 aspect-video w-full bg-gray-400" />

              <div className="mt-10 flex flex-row max-md:flex-col max-md:items-center">
                <div className="flex w-54 flex-col max-md:w-full">
                  <img
                    className="rounded-2xl"
                    src={selectedTutor?.img ?? '/icons/x-btn.svg'}
                    alt={selectedTutor?.name}
                  />
                  <div className="flex flex-row items-center justify-center pt-6">
                    <img src={selectedTutor?.countryImg ?? '/icons/x-btn.svg'} />
                    <p className="pl-2 font-montserrat text-2xl font-bold">
                      {selectedTutor?.name}
                    </p>
                  </div>
                </div>

                <div className="ml-10 flex flex-1 flex-col max-md:ml-0 max-md:mt-6">
                  <p className="mb-4 text-2xl font-bold max-md:text-xl">
                    엣지 운영진이 소개하는 튜터
                  </p>
                  <p className="text- mb-6 text-pretty text-base font-normal text-[#606060]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
                    facilis inventore necessitatibus dolores, earum dolore cupiditate
                    sequi tenetur. Veritatis, ipsa nostrum maiores possimus aliquam earum
                    tempore voluptatem excepturi dolores qui, nam officia fugit
                    consequatur dolorum. Alias laboriosam incidunt maiores, ipsa optio
                    facilis ullam? Corrupti veritatis animi, quia fuga similique commodi?
                  </p>

                  <p className="mb-4 text-2xl font-bold max-md:text-xl">자기소개</p>
                  <p className="text- mb-6 text-pretty text-base font-normal text-[#606060]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima
                    fuga sequi ullam, reprehenderit illo ea earum assumenda praesentium
                    rem nobis dolorem quo repellat vitae fugiat distinctio, saepe quidem,
                    itaque hic cum? Fuga maiores ad eveniet saepe maxime hic ipsa, autem
                    omnis nihil perferendis amet dignissimos incidunt, exercitationem iure
                    voluptatem culpa minima consequuntur excepturi perspiciatis. Quos,
                    nesciunt suscipit! Ut facilis tempore earum consequatur, quasi
                    dignissimos, sequi aliquid rem, ipsam magnam doloribus esse minus
                    beatae harum obcaecati laudantium rerum aspernatur. Earum?
                  </p>

                  <p className="mb-4 text-2xl font-bold max-md:text-xl">취미</p>
                  <p className="text- mb-6 text-pretty text-base font-normal text-[#606060]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
                    hic.
                  </p>

                  <p className="mb-4 text-2xl font-bold max-md:text-xl">경력</p>
                  <p className="text- mb-6 text-pretty text-base font-normal text-[#606060]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, nihil.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog> */}

        {/* 튜터 모달 */}
        <dialog id="tutor_modal" className="modal">
          <div className="modal-box max-w-full overflow-hidden p-0 focus-visible:outline-none max-md:h-full max-md:max-h-full max-md:w-full max-md:rounded-none">
            <div className="max-h-[80vh] overflow-y-auto p-6 max-md:max-h-[100vh]">
              {/* 타이틀 */}
              <div className="flex flex-row justify-between">
                <div className="flex-center text-[28px] font-bold">
                  튜터&nbsp;
                  <span className="text-2xl text-[#7D5FFF]">
                    {selectedTutor?.name ?? ''}
                  </span>
                </div>

                <button
                  onClick={() => {
                    closeTutorModal();
                  }}
                >
                  <img src="/icons/x-btn.svg" />
                </button>
              </div>

              {/* 동영상 */}
              <div className="mt-6 aspect-video w-full bg-gray-400" />

              <div className="mt-10 flex flex-row max-md:flex-col max-md:items-center">
                {/* 프로필 */}
                <div className="flex w-54 flex-col max-md:w-full">
                  <img
                    className="rounded-2xl"
                    src={selectedTutor?.img ?? '/icons/x-btn.svg'}
                    alt={selectedTutor?.name}
                  />
                  <div className="flex flex-row items-center justify-center pt-6">
                    <img src={selectedTutor?.countryImg ?? '/icons/x-btn.svg'} />
                    <p className="pl-2 font-montserrat text-2xl font-bold">
                      {selectedTutor?.name}
                    </p>
                  </div>
                </div>

                {/* 소개 */}
                <div className="ml-10 flex flex-1 flex-col max-md:ml-0 max-md:mt-6">
                  <p className="mb-4 text-2xl font-bold max-md:text-xl">
                    엣지 운영진이 소개하는 튜터
                  </p>
                  <p className="text- mb-6 text-pretty text-base font-normal text-[#606060]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
                    facilis inventore necessitatibus dolores, earum dolore cupiditate
                    sequi tenetur. Veritatis, ipsa nostrum maiores possimus aliquam earum
                    tempore voluptatem excepturi dolores qui, nam officia fugit
                    consequatur dolorum. Alias laboriosam incidunt maiores, ipsa optio
                    facilis ullam? Corrupti veritatis animi, quia fuga similique commodi?
                  </p>

                  <p className="mb-4 text-2xl font-bold max-md:text-xl">자기소개</p>
                  <p className="text- mb-6 text-pretty text-base font-normal text-[#606060]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima
                    fuga sequi ullam, reprehenderit illo ea earum assumenda praesentium
                    rem nobis dolorem quo repellat vitae fugiat distinctio, saepe quidem,
                    itaque hic cum?
                  </p>

                  <p className="mb-4 text-2xl font-bold max-md:text-xl">취미</p>
                  <p className="text- mb-6 text-pretty text-base font-normal text-[#606060]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
                    hic.
                  </p>

                  <p className="mb-4 text-2xl font-bold max-md:text-xl">경력</p>
                  <p className="text- mb-6 text-pretty text-base font-normal text-[#606060]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, nihil.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>

        {/* 섹션 2 웹 */}
        <div className="mt-[60px] max-md:hidden">
          <div className="flex min-h-[448px] justify-end bg-[url(/images/bg-tutor.png)] bg-cover bg-center">
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
        <div className="bg-mobile-tutor sm:bg-tablet-tutor mt-[60px] flex min-h-[1000px] justify-end bg-cover bg-center md:hidden">
          <div className="flex min-h-[1000px] justify-end">
            <div className="px-4 pt-[60px]">
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
          <div className="mt-[60px] flex flex-row justify-start">
            {[1, 2, 3, 4, 5].map((e) => (
              <div key={e} className="flex-grow">
                <img src={`/icons/step-${e}.svg`} />
              </div>
            ))}
          </div>
        </div>

        {/* 섹션 3 모바일 */}
        <div className="mt-[60px] flex flex-col items-center text-center md:hidden">
          <p className="text-[32px] font-bold">
            엣지영어 <br /> 5단계 강사 선발 과정
          </p>
          <div className="mt-[60px] flex flex-col justify-center">
            {[1, 2, 3, 4, 5].map((e) => (
              <div key={e}>
                <img src={`/icons/mobile-step-${e}.svg`} />
                {e === 5 ? (
                  <div></div>
                ) : (
                  <div className="my-4 flex justify-center">
                    <img src="/icons/arrow-down.svg" />
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
            <div className="flex flex-grow items-center rounded-lg border border-[#E8E8E8] bg-white px-10 py-8 text-center text-2xl font-medium">
              <img src="/icons/check.svg" className="mr-[16px]" />
              미국
              <span className="text-[#D2D2D2]">・</span>
              캐나다 출신
            </div>
            <div className="flex flex-grow items-center rounded-lg border border-[#E8E8E8] bg-white px-10 py-8 text-center text-2xl font-medium">
              <img src="/icons/check.svg" className="mr-[16px]" />
              TESOL/TEFL 국제 영어교육 자격증 보유
            </div>{' '}
            <div className="flex flex-grow items-center rounded-lg border border-[#E8E8E8] bg-white px-10 py-8 text-center text-2xl font-medium">
              <img src="/icons/check.svg" className="mr-[16px]" />
              영어 교육 경력 1년 이상
            </div>{' '}
            <div className="flex flex-grow items-center rounded-lg border border-[#E8E8E8] bg-white px-10 py-8 text-center text-2xl font-medium">
              <img src="/icons/check.svg" className="mr-[16px]" />
              시범 강의 평가 통과
            </div>
          </div>
        </div>

        {/* 섹션 4 모바일 */}
        <div className="mt-[60px] flex w-full flex-col bg-[#F3F6F8] py-[60px] md:hidden">
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
            <div className="flex flex-grow items-center rounded-lg border border-[#E8E8E8] bg-white px-4 py-6 text-lg font-medium">
              <img src="/icons/check.svg" className="mr-2 h-6 w-6" />
              미국
              <span className="text-[#D2D2D2]">・</span>
              캐나다 출신
            </div>
            <div className="flex flex-grow items-center rounded-lg border border-[#E8E8E8] bg-white px-4 py-6 text-lg font-medium">
              <img src="/icons/check.svg" className="mr-2 h-6 w-6" />
              TESOL/TEFL 국제 영어교육 자격증 보유
            </div>{' '}
            <div className="flex flex-grow items-center rounded-lg border border-[#E8E8E8] bg-white px-4 py-6 text-lg font-medium">
              <img src="/icons/check.svg" className="mr-2 h-6 w-6" />
              영어 교육 경력 1년 이상
            </div>{' '}
            <div className="flex flex-grow items-center rounded-lg border border-[#E8E8E8] bg-white px-4 py-6 text-lg font-medium">
              <img src="/icons/check.svg" className="mr-2 h-6 w-6" />
              시범 강의 평가 통과
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
