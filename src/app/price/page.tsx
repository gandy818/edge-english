export default function PricePage() {
  return (
    <div className="bg-[#F3F6F8] py-[120px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
        {/* 타이틀 */}
        <div>
          <p>EDGE ENGLISH</p>
          <h1>
            엣지있는 <br /> <span>원어민 1:1 화상영어</span>수업료
          </h1>
        </div>

        {/* 수강료 */}
        <div className="flex gap-32">
          <div className="rounded-2xl border-[#ddd] bg-white">
            <div className="bg-edge-purple p-6">
              <p className="text-2xl font-extrabold text-white">
                <span className="font-montserrat">20</span>분 화상영어
              </p>
            </div>
            <div className="flex gap-3 border-[#ddd] p-6">
              <div>
                <span className="bg-[#FFEDB8] p-2 text-[#333]">주 2회</span>
                <p>월 횟수 8회</p>
              </div>
              <div>
                <p>
                  월 <span>130,000</span>원
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 수강 신청하기 버튼 */}
      </div>
    </div>
  );
}
