'use client';

import { TutorType } from '@/types/TutorType';
import Image from 'next/image';
import { useState } from 'react';

export default function TutorGallery({ tutorList }: { tutorList: TutorType[] }) {
  const [selectedTutor, setSelectedTutor] = useState<TutorType>();

  const openTutorModal = (name: string) => {
    const tutor = tutorList.find((e) => e.name === name); // 선택된 튜터를 tutorList에서 찾음

    setSelectedTutor(undefined); // 이전 tutor 데이터를 undefined로 초기화

    const modal = document.getElementById('tutor_modal') as HTMLDialogElement; // 모달(dialog) 요소를 가져옴

    // 모달이 이미 열려 있다면, 먼저 닫음
    if (modal && modal.open) {
      modal.close();
    }

    // 10ms 뒤 데이터 세팅
    setTimeout(() => {
      setSelectedTutor(tutor);
      modal.showModal();
    }, 10);
  };

  const closeTutorModal = () => {
    const modal = document.getElementById('tutor_modal') as HTMLDialogElement;

    modal?.close();
    setSelectedTutor(undefined);
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
            <Image
              className="aspect-[4/5] w-full rounded-2xl object-cover"
              src={tutor.img}
              alt={tutor.name}
              width={288}
              height={360}
            />

            <div className="flex flex-row items-center justify-center pt-6">
              <Image
                src={tutor.countryImg}
                alt="tutor's contry image"
                width={32}
                height={22}
              />
              <p className="pl-2 font-montserrat text-2xl font-bold">{tutor.name}</p>
            </div>
            <p className="mt-2 self-center text-center font-bold whitespace-pre-line">{tutor.desc}</p>
            <div className="mt-4 flex flex-wrap justify-center gap-1">
              {tutor.tags.map((tag) => (
                <div
                  key={tag}
                  className="rounded-lg bg-edge-purple bg-opacity-10 px-2 py-1 text-[11px] font-semibold text-[#5542A5]"
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
                <Image src="/icons/x-btn.svg" alt="x-button" width={32} height={32} />
              </button>
            </div>
            <div className="scrollbar-hide mx-6 mb-10 max-h-[75vh] overflow-y-auto max-md:max-h-[87vh]">
              {/* 동영상 */}
              <iframe
                className="aspect-[16/9] w-full min-w-0 rounded-2xl bg-gray-400"
                src={selectedTutor?.videoUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

              <div className="mt-10 flex flex-row max-md:flex-col max-md:items-center">
                {/* 프로필 */}
                <div className="relative flex h-67 w-54 flex-col max-md:h-auto max-md:w-full">
                  {selectedTutor?.popupImg && (
                    <Image
                      className="aspect-[4/5] w-full rounded-2xl"
                      src={selectedTutor?.popupImg}
                      alt={selectedTutor?.name}
                      width={216}
                      height={258}
                    />
                  )}
                  <div className="flex flex-row items-center justify-center pt-6">
                    {selectedTutor?.countryImg && (
                      <Image
                        src={selectedTutor?.countryImg}
                        alt="tutor's contry image"
                        width={32}
                        height={22}
                      />
                    )}
                    <p className="pl-2 font-montserrat text-2xl font-bold">
                      {selectedTutor?.name}
                    </p>
                  </div>
                </div>

                {/* 소개 */}
                <div className="mb-10 ml-10 flex flex-1 flex-col max-md:ml-0 max-md:mt-6">
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
