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
            <img
              className="aspect-[4/5] w-full rounded-2xl"
              src={tutor.img}
              alt={tutor.name}
            />
            <div className="flex flex-row items-center justify-center pt-6">
              <img src={tutor.countryImg} alt="tutor's contry image" />
              <p className="pl-2 font-montserrat text-2xl font-bold">{tutor.name}</p>
            </div>
            <p className="mt-2 self-center text-center font-bold">{tutor.desc}</p>
            <div className="mt-4 flex flex-wrap justify-center gap-1">
              {tutor.tags.map((tag) => (
                <div
                  key={tag}
                  className="rounded-lg bg-edge-purple bg-opacity-10 px-3 py-2 text-xs font-semibold text-[#5542A5]"
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
                <span className="text-2xl text-edge-purple">
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
              <video
                className="aspect-video w-full rounded-2xl bg-gray-400"
                src={selectedTutor?.videoUrl}
                controls
                playsInline
                preload="metadata"
              />

              <div className="mt-10 flex flex-row max-md:flex-col max-md:items-center">
                {/* 프로필 */}
                <div className="flex w-54 flex-col max-md:w-full">
                  <img
                    className="aspect-[4/5] w-full rounded-2xl"
                    src={selectedTutor?.popupImg ?? '/icons/x-btn.svg'}
                    alt={selectedTutor?.name}
                  />
                  <div className="flex flex-row items-center justify-center pt-6">
                    <img
                      src={selectedTutor?.countryImg ?? '/icons/x-btn.svg'}
                      alt="x button"
                    />
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
                  <p className="text- mb-6 text-pretty text-base font-normal text-edge-gray">
                    {selectedTutor?.introduce1}
                  </p>

                  <p className="mb-4 text-2xl font-bold max-md:text-xl">자기소개</p>
                  <p className="text- mb-6 text-pretty text-base font-normal text-edge-gray">
                    {selectedTutor?.introduce2}
                  </p>

                  <p className="mb-4 text-2xl font-bold max-md:text-xl">취미</p>
                  <p className="text- mb-6 text-pretty text-base font-normal text-edge-gray">
                    {selectedTutor?.hobbys}
                  </p>

                  <p className="mb-4 text-2xl font-bold max-md:text-xl">경력</p>
                  <p className="text- mb-6 text-pretty text-base font-normal text-edge-gray">
                    {selectedTutor?.career}
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
