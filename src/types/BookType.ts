export interface BookType {
  level: '입문' | '초급' | '중급' | '고급';
  category: '' | '일반회화' | '비즈니스 영어' | '여행 영어' | '프리토킹';
  title: string;
  describe: string;
  pdf: string;
  buyLink: string;
}
