const Page = async () => {
  return (
    <div className="h-full w-full px-1 py-4">
      <h2 className="text-2xl font-semibold my-8">공지사항 관리</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-x-4 gap-y-1">
        <a
          className="p-4 py-12 rounded-lg text-center bg-sky-700 lg:text-lg font-semibold text-white hover:bg-sky-600 hover:-translate-y-0.5 transform transition-all"
          href="/admin/new-notice"
        >
          공지사항 작성
        </a>
        <a
          className="p-4 py-12 rounded-lg text-center bg-sky-700 lg:text-lg font-semibold text-white hover:bg-sky-600 hover:-translate-y-0.5 transform transition-all"
          href="/notices"
        >
          공지사항 관리
        </a>
      </div>

      <h2 className="text-2xl font-semibold my-8">상담 관리</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-x-4 gap-y-1">
        <a
          className="p-4 py-12 rounded-lg text-center bg-sky-700 lg:text-lg font-semibold text-white hover:bg-sky-600 hover:-translate-y-0.5 transform transition-all"
          href="#"
        >
          상담신청 목록
        </a>
      </div>

      <h2 className="text-2xl font-semibold my-8">관리자</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-x-4 gap-y-1">
        <a
          className="p-4 py-12 rounded-lg text-center bg-sky-700 lg:text-lg font-semibold text-white hover:bg-sky-600 hover:-translate-y-0.5 transform transition-all"
          href="#"
        >
          관리자 아이디 추가
        </a>
      </div>
    </div>
  );
};

export default Page;
