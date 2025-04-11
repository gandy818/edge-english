'use client';

import { TutorType } from '@/types/TutorType';
import { useState } from 'react';

export default function TutorGallery({ tutorList }: { tutorList: TutorType[] }) {
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

  return (
    <>
      <div className="mt-15 flex max-w-[1200px] flex-wrap justify-center gap-4 self-center max-md:flex-col max-md:gap-10">
        {tutorList.map((tutor) => (
          <div
            key={tutor.name}
            className="flex w-72 cursor-pointer flex-col justify-start"
            onClick={() => openTutorModal(tutor.name)}
          >
            <img className="rounded-2xl" src={tutor.img} alt={tutor.name} />
            <div className="flex flex-row items-center justify-center pt-6">
              <img src={tutor.countryImg} alt="tutor's contry image" />
              <p className="pl-2 font-montserrat text-2xl font-bold">{tutor.name}</p>
            </div>
            <p className="mt-2 self-center text-center font-bold">{tutor.desc}</p>
            <div className="mt-4 flex flex-wrap justify-center gap-1">
              {tutor.tags.map((tag) => (
                <div
                  key={tag}
                  className="bg-edge-purple rounded-lg bg-opacity-10 px-3 py-2 text-xs font-semibold text-[#5542A5]"
                >
                  #{tag}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 튜터 모달 */}
      <dialog id="tutor_modal" className="modal">
        <div className="modal-box max-w-full overflow-hidden p-0 focus-visible:outline-none max-md:h-full max-md:max-h-full max-md:w-full max-md:rounded-none">
          <div>
            {/* 타이틀 */}
            <div className="m-6 flex flex-row justify-between">
              <div className="flex-center text-[28px] font-bold">
                튜터&nbsp;
                <span className="text-edge-purple text-2xl">
                  {selectedTutor?.name ?? ''}
                </span>
              </div>

              <button
                onClick={() => {
                  closeTutorModal();
                }}
                className="focus-visible:outline-none"
              >
                <img src="/icons/x-btn.svg" alt="x-button" />
              </button>
            </div>
            <div className="mx-6 mb-10 max-h-[75vh] overflow-y-auto max-md:max-h-[87vh]">
              {/* 동영상 */}
              <iframe
                className="aspect-video w-full bg-gray-400"
                src="https://www.youtube.com/embed/qMwzWk81tVM"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

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
                  <p className="text- text-edge-gray mb-6 text-pretty text-base font-normal">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
                    facilis inventore necessitatibus dolores, earum dolore cupiditate
                    sequi tenetur. Veritatis, ipsa nostrum maiores possimus aliquam earum
                    tempore voluptatem excepturi dolores qui, nam officia fugit
                    consequatur dolorum. Alias laboriosam incidunt maiores, ipsa optio
                    facilis ullam? Corrupti veritatis animi, quia fuga similique commodi?
                  </p>

                  <p className="mb-4 text-2xl font-bold max-md:text-xl">자기소개</p>
                  <p className="text- text-edge-gray mb-6 text-pretty text-base font-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima
                    fuga sequi ullam, reprehenderit illo ea earum assumenda praesentium
                    rem nobis dolorem quo repellat vitae fugiat distinctio, saepe quidem,
                    itaque hic cum?
                  </p>

                  <p className="mb-4 text-2xl font-bold max-md:text-xl">취미</p>
                  <p className="text- text-edge-gray mb-6 text-pretty text-base font-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
                    hic.
                  </p>

                  <p className="mb-4 text-2xl font-bold max-md:text-xl">경력</p>
                  <p className="text- text-edge-gray mb-6 text-pretty text-base font-normal">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, nihil.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, nihil.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, nihil.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, nihil.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, nihil.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, nihil.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, nihil.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, nihil.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, nihil.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, nihil.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, nihil.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, nihil.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, nihil.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, nihil.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, nihil.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
