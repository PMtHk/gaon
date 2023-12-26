const Notice = async () => {
  return (
    <div className="min-h-80 h-full w-full border-2 rounded-2xl flex flex-col items-center p-4">
      <div className="w-full flex justify-between items-center">
        <span className="text-2xl font-bold text-slate-900">공지사항</span>
        <button className="font-semibold text-slate-600">더보기</button>
      </div>
      <div className="w-full flex flex-col">
        {/* TODO: 공지사항 목록 표시 */}
      </div>
    </div>
  );
};

export default Notice;
