const VisitingCare = async () => {
  return (
    <div className="min-h-72 h-full w-full bg-slate-50 rounded-2xl flex">
      <div className="w-1/2 h-full bg-vc bg-cover bg-[55%_center] rounded-l-2xl" />
      <div className="w-1/2 h-full flex flex-col p-2 items-center justify-center">
        <span className="font-semibold text-3xl text-slate-700">방문요양</span>
        <p className="mt-8 p-2 text-xl font-semibold text-slate-500 break-keep">
          취사, 청소, 세탁 등 가사지원, 병원동행, 산책 등 신체활동지원 및 정서지원을 포함합니다.
        </p>
      </div>
    </div>
  );
};

export default VisitingCare;
