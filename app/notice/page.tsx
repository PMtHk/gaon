const Page = () => {
  return (
    <div className="w-full flex flex-col pt-16 lg:pt-20 items-center">
      <div className="py-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold flex flex-col items-center text-sky-900">
          <span className="text-base md:text-lg lg:text-xl font-light text-pink-600">
            Notification
          </span>
          공지사항
        </h1>
      </div>
      <div className="w-full h-full container flex flex-col">
        <div>
          <div className="w-full flex flex-row justify-center items-center px-2">
            <input
              type="text"
              aria-label="공지사항 검색어 입력란"
              required
              placeholder="검색어를 입력해주세요"
              className="w-full max-w-[420px] h-12 md:h-14 rounded-l-xl border border-gray-300 px-4 text-xl text-sky-900 outline-none"
            />
            <button className="w-20 h-12 md:h-14 rounded-r-xl bg-sky-900 text-xl text-slate-50">
              검색
            </button>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Page;
