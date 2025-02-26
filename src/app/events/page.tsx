'use client';

import { useState } from 'react';

export default function EventPage() {
  const [currentType, setCurrentType] = useState('all');

  return (
    <div className="mx-auto max-w-[1200px]">
      <div className="mt-[120px] border-b border-[#A4A4A4]">
        <h1 className="text-[68px] font-bold">이벤트</h1>
      </div>

      {/* 분류 */}
      <div className="mt-10 flex gap-2">
        <button
          className={`rounded-full border-[#E8E8E8] px-6 py-3 font-bold ${currentType === 'all' ? 'bg-[#FFD401]' : 'border'}`}
        >
          ALL
        </button>
        <button
          className={`rounded-full border-[#E8E8E8] px-6 py-3 font-bold ${currentType === 'inprogress' ? 'bg-[#FFD401]' : 'border'}`}
        >
          진행중
        </button>
        <button
          className={`rounded-full border-[#E8E8E8] px-6 py-3 font-bold ${currentType === 'done' ? 'bg-[#FFD401]' : 'border'}`}
        >
          마감
        </button>
      </div>

      {/* 총 게시글 개수 */}
      <div className="mt-6 flex gap-2">
        <p className="font-montserrat font-bold tracking-[-2px]">Total</p>
        <p className="font-montserrat font-bold text-[#7D5FFF]">5</p>
      </div>
    </div>
  );
}
