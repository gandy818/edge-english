import { NextResponse } from 'next/server';

export const revalidate = 0; // ✅ 매 요청마다 최신 데이터 반환

export async function GET() {
  return NextResponse.json([
    {
      index: 0,
      type: 'all',
      date: '2025-02-25',
      title: '공지사항 제목이 들어갑니다',
      writer: '엣지영어',
    },
    {
      index: 1,
      type: 'event',
      date: '2025-02-26',
      title: '이벤트 소식이 있습니다',
      writer: '엣지영어',
    },
  ]);
}
