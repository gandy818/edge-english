'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

export default function EventPage() {
  const [currentType, setCurrentType] = useState('all');

  const getEventList = async () => {
    try {
      const res = await axios.get('/api/eventlist/');

      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getEventList();
  }, []);

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

      {/* 테이블 */}
      <div className="mt-10 overflow-x-auto">
        <table className="table text-center">
          {/* head */}
          <thead className="h-[70px] bg-[#F5F5F5] font-bold">
            <tr className="border-[#E8E8E8]">
              <th>구분</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody className="h-[70px] font-medium">
            {/* row 1 */}
            <tr className="!border-b border-[#E8E8E8]">
              <td>
                <p
                  className={`mx-auto w-[74px] rounded-full border-[#E8E8E8] bg-[#FFD401] px-4 py-2 font-medium`}
                >
                  진행중
                </p>
              </td>
              <td className="max-w-56 truncate">
                공지사항 제목이 들어갑니다공지사항 제목이 들어갑니다공지사항 제목이
                들어갑니다공지사항 제목이 들어갑니다공지사항 제목이 들어갑니다
              </td>
              <td>엣지영어</td>
              <td>2025-02-16</td>
            </tr>

            {/* row 2 */}
            <tr className="!border-b border-[#E8E8E8]">
              <td>
                <p
                  className={`mx-auto w-[74px] rounded-full border-[#777] bg-[#E8E8E8] px-4 py-2 font-medium`}
                >
                  마감
                </p>
              </td>
              <td className="max-w-56 truncate">공지사항 제목이 들어갑니다</td>
              <td>엣지영어</td>
              <td>2025-02-16</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
