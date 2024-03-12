import Image from "next/image";

import callInfo from "../app/assets/CallInfo_image.png";

const CallInfo = async () => {
  return (
    <div className="relative min-h-80 h-full w-full border-2 bg-call-info bg-cover rounded-2xl p-4 overflow-hidden">
      <a
        href="tel:032-566-6645"
        className="w-full h-full flex flex-col items-center justify-center"
      >
        <span className="text-slate-50 text-3xl font-semibold">
          무료상담 / 등급신청
        </span>
        <span className="mt-4 text-slate-50 text-4xl font-semibold">
          032-566-6645
        </span>
      </a>

      <Image
        src={callInfo}
        alt="상담문의 032-566-6645"
        fill
        objectFit="cover"
        className="z-[-10]"
      />
    </div>
  );
};

export default CallInfo;
