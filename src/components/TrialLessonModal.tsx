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
          ✔실제 수업을 진행할 선생님과 바로 시작합니다.
        </p>
        <p className="mt-6 text-sm font-bold">
          학생마다 원하는 수업 분위기나 방향이 다르다니보니,
          <br />
          첫 수업 전 간단한 설문을 통해 미리 선생님과 내용을 공유하고 있어요.
        </p>
       
        <p className="mt-6 text-center text-sm font-bold">
          💡&quot;체험이 아닌, 진짜 수업으로 시작하세요&quot;💡
        </p>
        <Link
          href="https://forms.gle/arWZ6uzK3BFgaxM39"
          target="_blank"
          className="btn mt-12 w-full rounded-lg border-none bg-edge-gray py-6 text-sm font-semibold text-white"
        >
          수업신청 하러 가기
        </Link>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
