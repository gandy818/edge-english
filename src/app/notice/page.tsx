'use client';

import Pagination from '@/components/Pagination';
import { PostType } from '@/types/PostType';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function NoticePage() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentType, setCurrentType] = useState('all');
  const [noticeList, setNoticeList] = useState<PostType[]>([]);
  const [filteredEventList, setFilteredEventList] = useState<PostType[]>([]);
  const itemsPerPage = 5; // 한 페이지 당 게시물 개수

  const getNoticeList = async () => {
    try {
      const res = await axios.get('/data/notice.json');

      setNoticeList(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getNoticeList();
  }, []);

  // 선택한 필터에 맞게 필터링
  useEffect(() => {
    let updatedList = noticeList;

    if (currentType === 'notice') {
      updatedList = noticeList.filter((notice) => notice?.status === '공지사항');
    } else if (currentType === 'etc') {
      updatedList = noticeList.filter((notice) => notice?.status === '기타');
    }

    setFilteredEventList(updatedList);
    setCurrentPage(1); // 필터 변경 시 첫 페이지로 이동
  }, [currentType, noticeList]);

  // 현재 페이지에 해당하는 게시글만 가져오기
  const indexOfLastItem = currentPage * itemsPerPage; // 마지막 게시물 인덱스
  const indexOfFirstitem = indexOfLastItem - itemsPerPage; // 첫 게시물 인덱스
  const currentNoticeList = filteredEventList.slice(indexOfFirstitem, indexOfLastItem); // 현재 페이지의 게시물 데이터

  return (
    <div className="mx-auto max-w-[1200px]">
      <div className="mt-[120px] border-b border-[#A4A4A4]">
        <h1 className="text-[68px] font-bold">공지사항</h1>
      </div>

      {/* 분류 */}
      <div className="mt-10 flex gap-2">
        <button
          className={`rounded-full border-[#E8E8E8] px-6 py-3 font-bold ${currentType === 'all' ? 'bg-[#FFD401]' : 'border'}`}
          onClick={() => setCurrentType('all')}
        >
          ALL
        </button>
        <button
          className={`rounded-full border-[#E8E8E8] px-6 py-3 font-bold ${currentType === 'notice' ? 'bg-[#FFD401]' : 'border'}`}
          onClick={() => setCurrentType('notice')}
        >
          공지사항
        </button>
        <button
          className={`rounded-full border-[#E8E8E8] px-6 py-3 font-bold ${currentType === 'etc' ? 'bg-[#FFD401]' : 'border'}`}
          onClick={() => setCurrentType('etc')}
        >
          기타
        </button>
      </div>

      {/* 총 게시글 개수 */}
      <div className="mt-6 flex gap-2">
        <p className="font-montserrat font-bold tracking-[-2px]">Total</p>
        <p className="font-montserrat font-bold text-[#7D5FFF]">
          {filteredEventList.length}
        </p>
      </div>

      {/* 테이블 */}
      <div className="mt-10 overflow-x-auto">
        <table className="table text-center">
          {/* head */}
          <thead className="h-[70px] bg-[#F5F5F5] font-bold">
            <tr className="border-[#E8E8E8]">
              <th>번호</th>
              <th>구분</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody className="h-[70px] font-medium">
            {currentNoticeList.map((notice) => {
              return (
                <tr
                  className="cursor-pointer !border-b border-[#E8E8E8]"
                  key={notice.index}
                  onClick={() => router.push(`/notice/${notice.index}`)}
                >
                  <td>{notice.index + 1}</td>
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
