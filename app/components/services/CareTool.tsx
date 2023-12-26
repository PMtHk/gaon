const CareTool = async () => {
  return (
    <div className="min-h-72 h-full w-full bg-slate-50 rounded-2xl flex">
      <div className="w-1/2 h-full bg-care-tool bg-cover bg-[55%_center] rounded-l-2xl" />
      <div className="w-1/2 h-full flex flex-col p-2 items-center justify-center">
        <span className="font-semibold text-3xl text-slate-700">복지용구</span>
        <p className="mt-8 p-2 text-xl font-semibold text-slate-500 break-keep">
          어르신의 생활을 돕는 복지용구 구입 및 설치를 도와드립니다.
        </p>
      </div>
    </div>
  );
};

export default CareTool;
