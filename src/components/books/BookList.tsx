'use client';

import { BookType } from '@/types/BookType';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface FilterProps {
  bookList: BookType[];
}

export default function BookList({ bookList }: FilterProps) {
  const filters = [
    '',
    ...Array.from(
      new Set(bookList.flatMap((item) => item.category.split(',').map((c) => c.trim())))
    ),
  ];

  const [filterState, setFilterState] = useState('');
  const [filteredBookList, setFilteredBookList] = useState<BookType[]>(bookList);

  useEffect(() => {
    if (filterState === '') {
      setFilteredBookList(bookList);
      return;
    }
    setFilteredBookList(
      bookList.filter((item) =>
        item.category
          .split(',')
          .map((c) => c.trim())
          .includes(filterState)
      )
    );
  }, [filterState, bookList]);

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
          <div key={idx} className="gap-16 rounded-lg border p-10 max-md:p-4.5 md:flex">
            <div className="flex flex-1 gap-6">
              <Image
                src={item.img}
                alt={item.title}
                className="h-[200px] w-[140px] flex-shrink-0 rounded-lg object-cover"
                width={140}
                height={200}
              />

              {/* 책 설명 */}
              <div>
                <div className="flex flex-wrap gap-2">
                  {item.level.map((e, idx2) => (
                    <div
                      key={idx2}
                      className="h-auto w-fit whitespace-nowrap rounded-full border border-[#e8e8e8] px-4 py-2 leading-none max-md:px-3 max-md:text-sm"
                    >
                      {e}
                    </div>
                  ))}
                </div>

                <h2 className="mt-4 text-[22px] font-bold">{item.title}</h2>
                <p className="mt-1 whitespace-pre-line text-lg text-edge-gray max-md:hidden">
                  {item.describe}
                </p>
              </div>
            </div>

            {/* 버튼들 */}
            <div className="flex flex-col gap-4 self-center max-md:mt-4 max-md:gap-2">
              <a
                href={item.pdf}
                target="_blank"
                className="btn h-[58px] rounded-lg border border-[#e8e8e8] bg-transparent hover:border-[#e8e8e8] md:w-50"
              >
                미리보기
              </a>
              {item.buyLink && (
                <a
                  href={item.buyLink}
                  target="_blank"
                  className="btn h-[58px] rounded-lg border-none bg-edge-yellow hover:bg-edge-yellow md:w-50"
                >
                  구매하기
                </a>
              )}
            </div>

            <p className="mt-8 whitespace-pre-line text-lg text-edge-gray max-md:mt-6 max-md:text-base md:hidden">
              {item.describe}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
