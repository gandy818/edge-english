import Link from 'next/link';

export default function TrialLessonModal() {
  return (
    <dialog id="experience_modal" className="modal">
      <div className="modal-box w-85">
        <h3 className="text-lg font-bold">
          🧡 엣지영어는 ‘체험 수업’을 따로 운영하지 않아요.
        </h3>
        <p className="mt-6 text-sm font-normal text-[#333]">
          일부 화상영어 업체에서는 레벨테스트나 체험 수업 전담 강사가 따로 있고, 막상
          등록하면 다른 강사가 배정되는 경우가 많은데요,
        </p>
        <p className="mt-6 text-sm font-bold">🙌엣지영어에서는</p>
        <p className="mt-2 text-sm font-bold">
          ✔처음 수업부터 실제 수업 그대로,
          <br />
          ✔첫 만남의 선생님이 계속 함께할 선생님입니다.
        </p>
        <p className="mt-6 text-sm font-bold">
          그래서 따로 체험 수업은 없지만,
          <br />
          처음 수업이 마음에 들지 않으셨다면
          <br />
          👉첫 수업료만 제외하고 아무 조건 없이 환불해 드립니다. 편하게 시작해보세요!
        </p>
        <p className="mt-2 text-lg font-semibold">
          20분 수업 9,900원
          <br />
          40분 수업 14,900원
          <br />
          50분 수업 17,900원
        </p>
        <p className="mt-6 text-center text-sm font-bold">
          💡"체험이 아닌, 진짜 수업으로 시작하세요"💡
        </p>
        <button className="btn mt-12 w-full rounded-lg border-none bg-edge-gray py-6 text-sm font-semibold text-white">
          <Link href="https://forms.gle/rkvoS9ut3a5eSe659" target="_blank">
            수업신청 하러 가기
          </Link>
        </button>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
