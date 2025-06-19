'use client';

import Pagination from '@/components/Pagination';
import TextDivider from '@/components/TextDivider';
import { PostType } from '@/types/PostType';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import rawNoticeList from '@/data/notices.json';
import Image from 'next/image';

export default function NoticePage() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentType, setCurrentType] = useState('all');
  const [filteredNoticeList, setFilteredNoticeList] = useState<PostType[]>([]);
  const itemsPerPage = 10; // 한 페이지 당 게시물 개수

  const noticeList = rawNoticeList as PostType[];

  // 선택한 필터에 맞게 필터링
  useEffect(() => {
    let updatedList = noticeList.reverse();

    // 공지글을 상단에 고정
    updatedList.sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

    if (currentType === 'notice') {
      updatedList = noticeList.filter((notice) => notice.status === '공지사항');
    } else if (currentType === 'etc') {
      updatedList = noticeList.filter((notice) => notice.status === '기타');
    }

    setFilteredNoticeList(updatedList);
    setCurrentPage(1); // 필터 변경 시 첫 페이지로 이동
  }, [currentType, noticeList]);

  // ✅ 공지글(`isPinned: true`)과 일반 게시글(`isPinned: false`) 분리
  const pinnedNotices = filteredNoticeList.filter((notice) => notice.isPinned);
  const nonPinnedNotices = filteredNoticeList.filter((notice) => !notice.isPinned);

  // ✅ 공지글 개수를 고려한 페이지네이션 적용
  const maxVisibleItems = itemsPerPage; // 한 페이지에 표시할 최대 개수
  const availableSlots = maxVisibleItems - pinnedNotices.length; // 공지글 제외 후 일반 게시글 수
  const indexOfLastItem = currentPage * availableSlots;
  const indexOfFirstItem = indexOfLastItem - availableSlots;
  const paginatedNotices = nonPinnedNotices.slice(indexOfFirstItem, indexOfLastItem);

  // ✅ 최종 출력 리스트 (공지글 + 일반 글 페이지네이션 적용)
  const currentNoticeList = [...pinnedNotices, ...paginatedNotices];

  return (
    <div className="mx-auto max-w-[1200px] px-4">
      <div className="mt-[120px] border-b border-[#A4A4A4] max-md:mt-8">
        <h1 className="pb-3 text-5xl font-bold max-md:text-[40px]">공지사항</h1>
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
          className={`text-nowrap rounded-full px-6 py-3 font-bold !leading-none max-md:px-4 max-md:py-2 ${currentType === 'notice' ? 'bg-edge-yellow' : 'border'}`}
          onClick={() => setCurrentType('notice')}
        >
          공지사항
        </button>
        <button
          className={`text-nowrap rounded-full px-6 py-3 font-bold !leading-none max-md:px-4 max-md:py-2 ${currentType === 'etc' ? 'bg-edge-yellow' : 'border'}`}
          onClick={() => setCurrentType('etc')}
        >
          기타
        </button>
      </ScrollContainer>
      {/* 총 게시글 개수 */}
      {/* <div className="mt-6 flex gap-2">
        <p className="font-montserrat font-bold tracking-[-2px]">Total</p>
        <p className="font-montserrat font-bold text-edge-purple">
          {filteredNoticeList.length}
        </p>
      </div> */}
      {/* 테이블 */}
      <div className="mt-10 overflow-x-auto max-md:hidden">
        <table className="table text-center">
          {/* head */}
          <thead className="h-[70px] bg-[#F5F5F5] font-bold">
            <tr className="border-[#e8e8e8]">
              <th>번호</th>
              <th>구분</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody className="h-[70px] font-medium">
            {currentNoticeList.map((notice, index) => {
              return (
                <tr
                  className="cursor-pointer !border-b border-[#e8e8e8]"
                  key={index}
                  onClick={() => router.push(`/notice/${notice.index}`)}
                >
                  <td className="flex-center">
                    {notice.isPinned ? (
                      <p className="flex w-fit gap-1 rounded-full bg-edge-purple px-4 py-2 font-semibold text-white">
                        <Image
                          src="/icons/notice/pin.svg"
                          alt="white pin"
                          width={16}
                          height={16}
                        />
                        중요
                      </p>
                    ) : (
                      notice.index
                    )}
                  </td>
                  <td>
                    <p
                      className={`mx-auto w-[74px] text-nowrap rounded-full px-4 py-2 font-medium`}
                    >
                      {notice.status}
                    </p>
                  </td>
                  <td className="max-w-56 truncate">{notice.title}</td>
                  <td>{notice.writer}</td>
                  <td>{notice.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* 모바일 리스트 */}
      <div className="mt-6 overflow-x-auto md:hidden">
        {currentNoticeList.map((notice, index) => {
          return (
            <div
              className="flex cursor-pointer flex-col gap-4 border-t py-4"
              key={index}
              onClick={() => router.push(`/notice/${notice.index}`)}
            >
              <div>
                {notice.isPinned ? (
                  <div className="flex items-center gap-2">
                    <p className="flex w-fit gap-1 rounded-full bg-edge-purple px-4 py-2 text-sm font-semibold text-white max-md:px-3">
                      <Image
                        src="/icons/notice/pin.svg"
                        alt="white pin"
                        width={16}
                        height={16}
                      />
                      중요
                    </p>
                    <p className="font-medium">공지사항</p>
                  </div>
                ) : (
                  <p className="font-medium">공지사항</p>
                )}
              </div>
              <div className="max-w-56 truncate font-medium max-md:max-w-80">
                {notice.title}
              </div>
              <div className="flex items-center font-medium">
                {notice.writer}
                <TextDivider />
                <span className="font-montserrat">{notice.date}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* 페이지네이션 */}
      <div className="flex-center mt-24 max-md:mt-12">
        <Pagination
          totalItems={nonPinnedNotices.length} // 공지글 제외한 일반 게시글 개수만 전달
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          itemsPerPage={availableSlots} // 공지글 제외 후 한 페이지에 표시할 개수
        />
      </div>
    </div>
  );
}
