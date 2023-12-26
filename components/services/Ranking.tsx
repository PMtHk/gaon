const Ranking = async () => {
  return (
    <div className="min-h-72 h-full w-full bg-slate-50 rounded-2xl flex">
      <div className="w-1/2 h-full bg-ranking bg-cover bg-[55%_center] rounded-l-2xl" />
      <div className="w-1/2 h-full flex flex-col p-2 items-center justify-center">
        <span className="font-semibold text-3xl text-slate-700">등급신청</span>
        <p className="mt-8 p-2 text-xl font-semibold text-slate-500 break-keep">
          어르신의 장기요양인정 및 등급판정에 대한 상담 및 신청을 도와드립니다.
        </p>
      </div>
    </div>
  );
};

export default Ranking;
