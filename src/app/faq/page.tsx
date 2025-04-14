'use client';

import { useEffect, useState } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

export default function FaqPage() {
  const [currentType, setCurrentType] = useState('all');

  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_URL);
    console.log('콘솔 테스트');
  }, []);

  return (
    <div className="mx-auto max-w-[1200px] max-md:px-4">
      <div className="mt-[120px] border-b border-[#A4A4A4] max-md:mt-16">
        <h1 className="text-[68px] font-bold max-md:text-[40px]">FAQ</h1>
      </div>

      {/* 분류 */}
      <ScrollContainer className="mt-10 flex gap-2">
        <button
          className={`text-nowrap rounded-full px-6 py-3 font-bold !leading-none max-md:px-4 max-md:py-2 ${currentType === 'all' ? 'bg-edge-yellow' : 'border'}`}
          onClick={() => setCurrentType('all')}
        >
          ALL
        </button>
        <button
          className={`text-nowrap rounded-full px-6 py-3 font-bold !leading-none max-md:px-4 max-md:py-2 ${currentType === '수강신청' ? 'bg-edge-yellow' : 'border'}`}
          onClick={() => setCurrentType('수강신청')}
        >
          수강 신청
        </button>
        <button
          className={`text-nowrap rounded-full px-6 py-3 font-bold !leading-none max-md:px-4 max-md:py-2 ${currentType === '수업관련' ? 'bg-edge-yellow' : 'border'}`}
          onClick={() => setCurrentType('수업관련')}
        >
          수업 관련
        </button>
        <button
          className={`text-nowrap rounded-full px-6 py-3 font-bold !leading-none max-md:px-4 max-md:py-2 ${currentType === '수강권' ? 'bg-edge-yellow' : 'border'}`}
          onClick={() => setCurrentType('수강권')}
        >
          수강권
        </button>
        <button
          className={`text-nowrap rounded-full px-6 py-3 font-bold !leading-none max-md:px-4 max-md:py-2 ${currentType === '결제' ? 'bg-edge-yellow' : 'border'}`}
          onClick={() => setCurrentType('결제')}
        >
          결제
        </button>
        <button
          className={`text-nowrap rounded-full px-6 py-3 font-bold !leading-none max-md:px-4 max-md:py-2 ${currentType === '기타' ? 'bg-edge-yellow' : 'border'}`}
          onClick={() => setCurrentType('기타')}
        >
          기타
        </button>
      </ScrollContainer>

      {/* 아코디언 */}
      <div className="relative z-0 mt-10 overflow-x-auto">
        {/* drawer 위로 올라오지 않게 하기 위해 relatvie와 z-index 추가 */}
        <div className="collapse collapse-arrow rounded-none border-b">
          <input type="checkbox" className="peer" />
          <div className="collapse-title flex h-17 items-center gap-6 bg-white py-2 md:px-10">
            <div className="flex-center text-edge-yellow h-8 min-w-8 rounded-full bg-[#777777] font-montserrat text-lg font-bold">
              Q
            </div>
            <p className="font-medium">주 1회 수업도 가능한가요?</p>
          </div>
          <div className="collapse-content flex items-center gap-6 bg-[#FCFCFC] text-sm peer-checked:py-4 md:px-10">
            <div className="flex-center bg-edge-purple h-8 min-w-8 rounded-full font-montserrat text-lg font-bold text-white">
              A
            </div>
            <p className="text-[#4A4A4A]">
              네. 가능합니다. 25분 수업권을 2번 붙여서 사용하시면 50분 수업으로 받을 수
              있습니다.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow rounded-none border-b">
          <input type="checkbox" className="peer" id="faq-2" />
          <div className="collapse-title flex h-17 items-center gap-6 bg-white py-2 md:px-10">
            <div className="flex-center text-edge-yellow h-8 min-w-8 rounded-full bg-[#777777] font-montserrat text-lg font-bold">
              Q
            </div>
            <p className="font-medium">공휴일에는 수업이 어떻게 진행되나요?</p>
          </div>
          <div className="collapse-content flex items-center gap-6 bg-[#FCFCFC] text-sm peer-checked:py-4 md:px-10">
            <div className="flex-center bg-edge-purple h-8 min-w-8 rounded-full font-montserrat text-lg font-bold text-white">
              A
            </div>
            <p className="text-[#4A4A4A]">
              엣지영어 수업은 외국 및 한국 공휴일과 상관없이 정상 진행됩니다. 공휴일에
              수업을 취소하고자 할 경우, 취소 규정에 맞춰 미리 연락해야 수강권 차감없이
              취소처리 됩니다.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow rounded-none border-b">
          <input type="checkbox" className="peer" />
          <div className="collapse-title flex h-17 items-center gap-6 bg-white py-2 md:px-10">
            <div className="flex-center text-edge-yellow h-8 min-w-8 rounded-full bg-[#777777] font-montserrat text-lg font-bold">
              Q
            </div>
            <p className="font-medium">수강권 사용 기한이 있나요?</p>
          </div>
          <div className="collapse-content flex items-center gap-6 bg-[#FCFCFC] text-sm peer-checked:py-4 md:px-10">
            <div className="flex-center bg-edge-purple h-8 min-w-8 rounded-full font-montserrat text-lg font-bold text-white">
              A
            </div>
            <p className="text-[#4A4A4A]">
              수강권은 등록한 수강 기간 내에 사용해야 하며, 기간 종료 후 남은 수강권은
              자동 소멸됩니다. 단, 수강권을 모두 사용하지 못한 경우 재등록 시 이월이
              가능합니다. 예: 1개월 등록 시 30일 내에, 3개월 등록 시 120일 내에 수강권을
              소진해야 합니다. (주 2회, 3회, 5회 수업 모두 해당)
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow rounded-none border-b">
          <input type="checkbox" className="peer" />
          <div className="collapse-title flex h-17 items-center gap-6 bg-white py-2 md:px-10">
            <div className="flex-center text-edge-yellow h-8 min-w-8 rounded-full bg-[#777777] font-montserrat text-lg font-bold">
              Q
            </div>
            <p className="font-medium">수업에 지각하면 어떻게 되나요?</p>
          </div>
          <div className="collapse-content flex items-center gap-6 bg-[#FCFCFC] text-sm peer-checked:py-4 md:px-10">
            <div className="flex-center bg-edge-purple h-8 min-w-8 rounded-full font-montserrat text-lg font-bold text-white">
              A
            </div>
            <p className="text-[#4A4A4A]">
              수업 지각 시, 25분 수업은 10분 이상, 40분 수업은 20분 이상 지각하면 수업이
              진행된 것으로 간주하고 1회 차감됩니다. 해당 시간 이내에 들어올 경우, 남은
              시간만큼만 수업이 진행되며 연장 없이 정시에 종료됩니다. 예를 들어, 수업이
              오전 10시 시작일 경우, 강사는 25분&50분 수업 각각 10시 9분 59초, 10시 19분
              59초까지 대기 후 별도의 알림 없이 종료됩니다.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow rounded-none border-b">
          <input type="checkbox" className="peer" />
          <div className="collapse-title flex h-17 items-center gap-6 bg-white py-2 md:px-10">
            <div className="flex-center text-edge-yellow h-8 min-w-8 rounded-full bg-[#777777] font-montserrat text-lg font-bold">
              Q
            </div>
            <p className="font-medium">원어민 선생님이 맞나요?</p>
          </div>
          <div className="collapse-content flex items-center gap-6 bg-[#FCFCFC] text-sm peer-checked:py-4 md:px-10">
            <div className="flex-center bg-edge-purple h-8 min-w-8 rounded-full font-montserrat text-lg font-bold text-white">
              A
            </div>
            <p className="text-[#4A4A4A]">
              엣지영어는 영어를 모국어로 하는 국가 출신의 선생님만 &apos;전원&apos;
              채용하고 있습니다.(영국, 아일랜드, 미국, 캐나다, 뉴질랜드, 호주)
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow rounded-none border-b">
          <input type="checkbox" className="peer" />
          <div className="collapse-title flex h-17 items-center gap-6 bg-white py-2 md:px-10">
            <div className="flex-center text-edge-yellow h-8 min-w-8 rounded-full bg-[#777777] font-montserrat text-lg font-bold">
              Q
            </div>
            <p className="font-medium">수업 녹음이나 녹화가 가능한가요?</p>
          </div>
          <div className="collapse-content flex items-center gap-6 bg-[#FCFCFC] text-sm peer-checked:py-4 md:px-10">
            <div className="flex-center bg-edge-purple h-8 min-w-8 rounded-full font-montserrat text-lg font-bold text-white">
              A
            </div>
            <p className="text-[#4A4A4A]">
              수업은 스카이프 화상 통화로 진행되며, 스카이프 기본 기능을 사용하여 자유롭게
              수업을 녹음/녹화 할 수 있습니다.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow rounded-none border-b">
          <input type="checkbox" className="peer" />
          <div className="collapse-title flex h-17 items-center gap-6 bg-white py-2 md:px-10">
            <div className="flex-center text-edge-yellow h-8 min-w-8 rounded-full bg-[#777777] font-montserrat text-lg font-bold">
              Q
            </div>
            <p className="font-medium">체험 수업 받아볼 수 있나요?</p>
          </div>
          <div className="collapse-content flex items-center gap-6 bg-[#FCFCFC] text-sm peer-checked:py-4 md:px-10">
            <div className="flex-center bg-edge-purple h-8 min-w-8 rounded-full font-montserrat text-lg font-bold text-white">
              A
            </div>
            <p className="text-[#4A4A4A]">
              정규 수업과 같은 퀄리티의 수업을 1회분만 결제하여 원하는 선생님께 수업을
              받아보실 수 있습니다. 1회분 수업료는 25분에 18,000원입니다.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow rounded-none border-b">
          <input type="checkbox" className="peer" />
          <div className="collapse-title flex h-17 items-center gap-6 bg-white py-2 md:px-10">
            <div className="flex-center text-edge-yellow h-8 min-w-8 rounded-full bg-[#777777] font-montserrat text-lg font-bold">
              Q
            </div>
            <p className="font-medium">개인 사정으로 수업 취소 할 수 있나요?</p>
          </div>
          <div className="collapse-content flex items-center gap-6 bg-[#FCFCFC] text-sm peer-checked:py-4 md:px-10">
            <div className="flex-center bg-edge-purple h-8 min-w-8 rounded-full font-montserrat text-lg font-bold text-white">
              A
            </div>
            <p className="text-[#4A4A4A]">
              예약된 수업에 부득이하게 참가할 수 없는 경우, 수업 시작 6시간 전까지
              엣지영어 카톡으로 취소 요청 하시면 수업 차감 없이 취소 가능합니다. 그러나
              수업 시작까지 6시간 미만이 남은 수업을 취소한다면 해당 수업은 차감됩니다.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow rounded-none border-b">
          <input type="checkbox" className="peer" />
          <div className="collapse-title flex h-17 items-center gap-6 bg-white py-2 md:px-10">
            <div className="flex-center text-edge-yellow h-8 min-w-8 rounded-full bg-[#777777] font-montserrat text-lg font-bold">
              Q
            </div>
            <p className="font-medium">수업 시간을 선생님과 협의해서 바꿀 수 있나요?</p>
          </div>
          <div className="collapse-content flex items-center gap-6 bg-[#FCFCFC] text-sm peer-checked:py-4 md:px-10">
            <div className="flex-center bg-edge-purple h-8 min-w-8 rounded-full font-montserrat text-lg font-bold text-white">
              A
            </div>
            <p className="text-[#4A4A4A]">
              엣지영어의 모든 수업은 정해진 시간에 고정되어 진행됩니다. 등록한 시간에
              수업이 고정되며, 시간 변경 희망 시 카톡으로 연락주시면 새로운 시간으로
              고정해 드립니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
