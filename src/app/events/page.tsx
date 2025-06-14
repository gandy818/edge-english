'use client';

import Pagination from '@/components/Pagination';
import TextDivider from '@/components/TextDivider';
import { PostType } from '@/types/PostType';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import rawEventList from '@/data/events.json';

export default function EventPage() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentType, setCurrentType] = useState('all');
  const [filteredEventList, setFilteredEventList] = useState<PostType[]>([]);
  const itemsPerPage = 10; // 한 페이지 당 게시물 개수

  const eventList = rawEventList as PostType[];

  // 선택한 필터에 맞게 필터링
  useEffect(() => {
    let updatedList = [...eventList]; // 원본 복사 (절대 reverse 직접X)

    if (currentType === 'inprogress') {
      updatedList = updatedList.filter((event) => event?.status === '진행중');
    } else if (currentType === 'done') {
      updatedList = updatedList.filter((event) => event?.status === '마감');
    }

    updatedList = updatedList.reverse(); // 무조건 reverse (최신순)
    setFilteredEventList(updatedList);
    setCurrentPage(1);
  }, [currentType, eventList]);

  // 현재 페이지에 해당하는 게시글만 가져오기
  const indexOfLastItem = currentPage * itemsPerPage; // 마지막 게시물 인덱스
  const indexOfFirstitem = indexOfLastItem - itemsPerPage; // 첫 게시물 인덱스
  const currentEventList = filteredEventList.slice(indexOfFirstitem, indexOfLastItem); // 현재 페이지의 게시물 데이터

  return (
    <div className="mx-auto max-w-[1200px] px-4">
      <div className="mt-[120px] border-b border-[#A4A4A4] max-md:mt-16">
        <h1 className="pb-3 text-[68px] font-bold max-md:text-[40px]">이벤트</h1>
      </div>

      {/* 분류 */}
      <ScrollContainer className="mt-10 flex gap-2">
        <button
          className={`text-nowrap rounded-full px-6 py-3 font-bold !leading-none max-md:px-4 max-md:py-2 ${currentType === 'all' ? 'bg-edge-yellow' : 'border'}`}
          onClick={() => setCurrentType('all')}
        >
          전체
        </button>
        <button
          className={`text-nowrap rounded-full px-6 py-3 font-bold !leading-none max-md:px-4 max-md:py-2 ${currentType === 'inprogress' ? 'bg-edge-yellow' : 'border'}`}
          onClick={() => setCurrentType('inprogress')}
        >
          진행중
        </button>
        <button
          className={`text-nowrap rounded-full px-6 py-3 font-bold !leading-none max-md:px-4 max-md:py-2 ${currentType === 'done' ? 'bg-edge-yellow' : 'border'}`}
          onClick={() => setCurrentType('done')}
        >
          마감
        </button>
      </ScrollContainer>

      {/* 총 게시글 개수 */}
      {/* <div className="mt-6 flex gap-2">
        <p className="font-montserrat font-bold tracking-[-2px]">Total</p>
        <p className="font-montserrat font-bold text-edge-purple">
          {filteredEventList.length}
        </p>
      </div> */}

      {/* 테이블 */}
      <div className="mt-10 overflow-x-auto max-md:hidden">
        <table className="table text-center">
          {/* head */}
          <thead className="h-[70px] bg-[#F5F5F5] font-bold">
            <tr className="border-[#e8e8e8]">
              <th>구분</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody className="h-[70px] font-medium">
            {currentEventList.map((event) => {
              return (
                <tr
                  className="cursor-pointer !border-b border-[#e8e8e8]"
                  key={event.index}
                  onClick={() => router.push(`/events/${event.index}`)}
                >
                  <td>
                    <p
                      className={`mx-auto w-[74px] rounded-full px-4 py-2 font-medium ${event.status === '진행중' ? 'bg-edge-yellow' : 'border-[#777] bg-[#E8E8E8]'}`}
                    >
                      {event.status}
                    </p>
                  </td>
                  <td className="max-w-56 truncate">{event.title}</td>
                  <td>{event.writer}</td>
                  <td>{event.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* 모바일 리스트 */}
      <div className="mt-6 overflow-x-auto md:hidden">
        {currentEventList.map((event) => {
          return (
            <div
              className="flex cursor-pointer flex-col gap-4 border-t py-4"
              key={event.index}
              onClick={() => router.push(`/events/${event.index}`)}
            >
              <div>
                <p
                  className={`w-fit rounded-full px-3 py-2 text-sm font-medium ${event.status === '진행중' ? 'bg-edge-yellow' : 'border-[#777] bg-[#E8E8E8]'}`}
                >
                  {event.status}
                </p>
              </div>
              <div className="max-w-56 truncate font-medium">{event.title}</div>
              <div className="flex items-center font-medium">
                {event.writer}
                <TextDivider />
                <span className="font-montserrat">{event.date}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* 페이지네이션 */}
      <div className="flex-center mt-24">
        <Pagination
          totalItems={filteredEventList.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
