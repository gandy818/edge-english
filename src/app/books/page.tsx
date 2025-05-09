import { BookType } from '@/types/BookType';
import BookList from '../../components/books/BookList';

const bookList: BookType[] = [
  {
    level: '입문',
    category: '',
    title: '인터체인지1',
    describe:
      '세계적으로 유명한 케임브리지 출판사에서 만든 영어학습교재입니다. 책 한권으로 말하기, 문법, 발음, 듣기, 쓰기, 읽기를 균형 있게 배울 수 있어 프리토킹이 아직 어려운 초보 학습자에게 추천하는 교재입니다.',
    pdf: '',
    buyLink: '/',
  },
  {
    level: '입문',
    category: '일반회화',
    title: '인터체인지2',
    describe:
      '세계적으로 유명한 케임브리지 출판사에서 만든 영어학습교재입니다. 책 한권으로 말하기, 문법, 발음, 듣기, 쓰기, 읽기를 균형 있게 배울 수 있어 프리토킹이 아직 어려운 초보 학습자에게 추천하는 교재입니다.',
    pdf: '',
    buyLink: '/',
  },
  {
    level: '입문',
    category: '비즈니스 영어',
    title: '인터체인지3',
    describe:
      '세계적으로 유명한 케임브리지 출판사에서 만든 영어학습교재입니다. 책 한권으로 말하기, 문법, 발음, 듣기, 쓰기, 읽기를 균형 있게 배울 수 있어 프리토킹이 아직 어려운 초보 학습자에게 추천하는 교재입니다.',
    pdf: '',
    buyLink: '/',
  },
  {
    level: '입문',
    category: '여행 영어',
    title: '인터체인지4',
    describe:
      '세계적으로 유명한 케임브리지 출판사에서 만든 영어학습교재입니다. 책 한권으로 말하기, 문법, 발음, 듣기, 쓰기, 읽기를 균형 있게 배울 수 있어 프리토킹이 아직 어려운 초보 학습자에게 추천하는 교재입니다.',
    pdf: '',
    buyLink: '/',
  },
  {
    level: '입문',
    category: '프리토킹',
    title: '인터체인지5',
    describe:
      '세계적으로 유명한 케임브리지 출판사에서 만든 영어학습교재입니다. 책 한권으로 말하기, 문법, 발음, 듣기, 쓰기, 읽기를 균형 있게 배울 수 있어 프리토킹이 아직 어려운 초보 학습자에게 추천하는 교재입니다.',
    pdf: '',
    buyLink: '/',
  },
];

const LEVEL_LIST = [
  {
    simbol: 'bronze',
    level: '입문 Beginner',
    describe: '기본적인 의사소통은 가능하지만 단어 위주로 뜨문뜨문 말해요',
  },
  {
    simbol: 'silver',
    level: '초급 Low-Intermediate',
    describe: '간단한 문장은 만들 수 있지만, 말이 길어지면 단어가 막 헷갈려요',
  },
  {
    simbol: 'gold',
    level: '중급 Intermediate',
    describe: '관계대명사나 구동사도조금씩 말할 수 있고, 문장도 길어져요',
  },
  {
    simbol: 'platinum',
    level: '고급 Advanced',
    describe: '원어민과 토론도 가능하고. would, could 같은 표현도 자연스럽게 써요',
  },
];

export default async function BooksPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/data/books.json`);

  // const bookList: BookType[] = await res.json();

  return (
    <div>
      {/* 지금 내 영어 레벨, 어디쯤일까요? */}
      <div className="bg-[#F3F6F8] py-[60px] max-md:px-4">
        <div className="mx-auto max-w-[912px]">
          <h1 className="text-center text-[32px] font-bold">
            지금 내 영어 레벨, 어디쯤일까요?
          </h1>

          {/* 레벨 */}
          <div className="mt-8">
            <div className="grid grid-cols-2 gap-4">
              {LEVEL_LIST.map((item, idx) => (
                <div className="rounded border bg-white px-6 py-4" key={idx}>
                  <div className="items-center gap-2 break-words text-lg font-semibold md:flex">
                    <img
                      src={`/icons/books/${item.simbol}.png`}
                      alt={`${item.simbol} icon`}
                      width={32}
                      height={32}
                    />
                    <h2 className="mt-2">{item.level}</h2>
                  </div>
                  <p className="pt-2">{item.describe}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-6 text-center text-[22px] font-medium text-[#777777] max-md:text-base">
            수강 중 언제든지, 횟수 제한없이 교재를 변경하실 수 있어요. 부담 없이
            시작해보세요!
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] max-md:px-4">
        <div className="mt-15 border-b border-[#A4A4A4] max-md:mt-16">
          <h1 className="text-[68px] font-bold max-md:text-[40px]">교재 소개</h1>
        </div>

        <div className="mt-12">
          <BookList bookList={bookList} />
        </div>
      </div>
    </div>
  );
}
