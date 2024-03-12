import Image from "next/image";

import bathService from "../../app/assets/bath-service.png";

const VisitingBathe = async () => {
  return (
    <div className="min-h-72 h-full w-full bg-slate-50 rounded-2xl flex">
      <div className="relative w-1/2 h-full bg-[55%_center] rounded-l-2xl overflow-hidden">
        <Image
          src={bathService}
          alt="방문목욕"
          fill
          objectFit="cover"
        />
      </div>
      <div className="w-1/2 h-full flex flex-col p-2 items-center justify-center">
        <span className="font-semibold text-3xl text-slate-700">방문목욕</span>
        <p className="mt-8 p-2 text-xl font-semibold text-slate-500 break-keep">
          어르신께 최적화된 목욕을 제공합니다.
          {/* TODO: */}
        </p>
      </div>
    </div>
  );
};

export default VisitingBathe;
