'use client';

import { BookType } from '@/types/BookType';
import { useState, useEffect } from 'react';

interface FilterProps {
  bookList: BookType[];
}

export default function BookList({ bookList }: FilterProps) {
  const filters = bookList.map((item) => item.category);

  const [filterState, setFilterState] = useState('');
  const [filteredBookList, setFilteredBookList] = useState<BookType[]>(bookList);

  useEffect(() => {
    if (filterState === '') {
      setFilteredBookList(bookList);
      return;
    }

    setFilteredBookList(bookList.filter((item) => item.category === filterState));
  }, [filterState]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <h2 className="mr-15 text-2xl font-medium max-md:mr-5 max-md:text-base">
          학습 주제
        </h2>

        {filters.map((item) => (
          <button
            key={item}
            className={`text-nowrap rounded-full px-6 py-3 font-bold !leading-none max-md:px-4 max-md:py-2 ${
              filterState === item ? 'bg-edge-yellow' : 'border'
            } `}
            onClick={() => setFilterState(item)}
          >
            {item === '' ? '전체' : item}
          </button>
        ))}
      </div>

      <div className="mt-[34px] flex flex-col gap-10">
        {filteredBookList.map((item, idx) => (
          <div key={idx} className="gap-16 rounded-lg border p-10 md:flex">
            <div className="flex gap-6">
              {/* 책 이미지 */}
              <div className="h-50 w-35 flex-shrink-0 bg-slate-200" />

              {/* 책 설명 */}
              <div>
                <div className="badge badge-outline h-auto border-[#e8e8e8] px-4 py-2">
                  {item.level}
                </div>
                <h2 className="mt-4 text-[22px] font-bold">{item.title}</h2>
                <p className="text-edge-gray mt-8 text-lg max-md:hidden">
                  {item.describe}
                </p>
              </div>
            </div>

            {/* 버튼들 */}
            <div className="flex flex-col gap-4 self-center max-md:mt-4 max-md:gap-2">
              <button className="btn h-[58px] rounded-lg border border-[#e8e8e8] hover:border-[#e8e8e8] md:w-50">
                미리보기
              </button>
              <button className="bg-edge-yellow hover:bg-edge-yellow btn h-[58px] rounded-lg border-none md:w-50">
                구매하기
              </button>
            </div>

            <p className="text-edge-gray mt-8 text-lg max-md:mt-6 md:hidden">
              {item.describe}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
