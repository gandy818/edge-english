export default function BooksPage() {
  return (
    <div>
      {/* 지금 내 영어 레벨, 어디쯤일까요? */}
      <div className="py-15 bg-[#F3F6F8] px-[264px] max-md:px-4">
        <h1 className="text-center text-[32px] font-bold">
          지금 내 영어 레벨, 어디쯤일까요?
        </h1>

        {/* 티어 */}
        <div className="mt-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded border bg-white px-6 py-4">
              <h2 className="items-center gap-2 break-words text-lg font-semibold md:flex">
                <img src="/icons/books/bronze.png" width={32} height={32} />
                입문 Beginner
              </h2>
              <p className="pt-2">
                기본적인 의사소통은 가능하지만 단어 위주로 뜨문뜨문 말해요
              </p>
            </div>

            <div className="rounded border bg-white px-6 py-4">
              <h2 className="items-center gap-2 break-words text-lg font-semibold md:flex">
                <img src="/icons/books/silver.png" width={32} height={32} />
                초급 Low-Intermediate
              </h2>
              <p className="pt-2">
                간단한 문장은 만들 수 있지만, 말이 길어지면 단어가 막 헷갈려요.
              </p>
            </div>

            <div className="rounded border bg-white px-6 py-4">
              <h2 className="items-center gap-2 break-words text-lg font-semibold md:flex">
                <img src="/icons/books/gold.png" width={32} height={32} />
                중급 Intermediate
              </h2>
              <p className="pt-2">
                관계대명사나 구동사도조금씩 말할 수 있고, 문장도 길어져요
              </p>
            </div>

            <div className="rounded border bg-white px-6 py-4">
              <h2 className="items-center gap-2 break-words text-lg font-semibold md:flex">
                <img src="/icons/books/platinum.png" width={32} height={32} />
                고급 Advanced
              </h2>
              <p className="pt-2">
                원어민과 토론도 가능하고. would, could 같은 표현도 자연스럽게 써요
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
