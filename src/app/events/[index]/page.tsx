export default function EventDetailPage() {
  return (
    <div className="mx-auto max-w-[1200px]">
      {/* 타이틀 */}
      <div className="mt-[120px] flex flex-col gap-6 border-t-4 border-[#000] py-16">
        <p className="font-montserrat text-2xl font-semibold text-[#000]">공지사항</p>
        <h1 className="font-montserrat text-5xl font-semibold text-[#000]">
          공지사항 제목이 들어갑니다
        </h1>
        <p className="font-semibold text-[#606060]">
          등록일 <span className="font-montserrat text-[#606060]">2025-02-16</span>
        </p>
      </div>

      {/* 본문 */}
      <div className="border-t border-[#A4A4A4] py-16">
        내용이 들어갑니다 내용 내용 내용
      </div>
    </div>
  );
}
