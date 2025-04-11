'use client';

import { useState, useEffect } from 'react';

interface FilterProps {
  data: string[];
}

export default function Filter({ data }: FilterProps) {
  const filters = ['', '일반회화', '비즈니스 영어', '여행 영어', '프리토킹'];

  const [filterState, setFilterState] = useState('');
  const [filteredData, setFilteredData] = useState<string[]>(data);

  useEffect(() => {
    setFilteredData(data.filter((item) => item.includes(filterState)));
  }, [filterState]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <div className="w-28 text-2xl">학습 주제</div>
        {filters.map((item) => (
          <div
            key={item}
            className={`badge badge-neutral ${
              filterState === item ? 'border-white bg-edge-yellow' : 'border-[#e8e8e8]'
            } px-6 py-4 text-base font-bold`}
            onClick={() => setFilterState(item)}
          >
            {item === '' ? '전체' : item}
          </div>
        ))}
      </div>

      <div className="flex flex-col">
        {filteredData.map((item, idx) => (
          <div key={idx}>{item}</div>
        ))}
      </div>
    </div>
  );
}
