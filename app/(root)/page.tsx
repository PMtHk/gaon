import Image from "next/image";
import CallInfo from "../../components/CallInfo";
import Notice from "../../components/Notice";
import VisitingCare from "../../components/services/VisitingCare";
import VisitingBathe from "../../components/services/VisitingBathe";
import Ranking from "../../components/services/Ranking";
import CareTool from "../../components/services/CareTool";

import homeIntro from "../assets/home_intro.png";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <div className=" relative w-screen h-[70vh] transition-all duration-500">
          <div className="container h-full flex flex-col p-1 px-2 items-center md:items-start justify-end md:justify-start pb-24 md:pb-0 md:mt-16 text-black md:text-slate-50 ">
            <span className="text-3xl md:text-4xl font-bold">
              가족 같은 마음으로
            </span>
            <span className="text-3xl md:text-4xl font-bold">
              어르신을 정성껏 모시겠습니다.
            </span>
            <span className="mt-4 text-lg md:text-2xl font-bold">
              가온 방문요양센터를 찾아주셔서 감사합니다.
            </span>
          </div>

          <Image
            src={homeIntro}
            alt="메인페이지 배경이미지"
            fill
            placeholder="blur"
            loading="eager"
            className="z-[-1] object-[65%_center] md:object-[60%_center] lg:object-[55%_center] object-cover"
          />
        </div>
      </div>

      <div className="container py-12 ">
        <div className="flex flex-col justify-center items-center mb-12">
          <p className="text-3xl lg:text-4xl font-semibold text-sky-900">
            가온 공지사항
          </p>
        </div>
        <div className="p-2 grid md:grid-cols-3 lg:grid-cols-2 gap-4">
          <Notice />
          <CallInfo />
        </div>
      </div>

      <div className="bg-neutral-200 py-12">
        <div className="container pt-16">
          <div className="flex flex-col justify-center items-center mb-12">
            <p className="text-3xl lg:text-4xl font-semibold text-sky-900">
              가온 방문요양서비스
            </p>
          </div>
          <div className="p-2 grid md:grid-cols-2 gap-6">
            <VisitingCare />
            <Ranking />
            <VisitingBathe />
            <CareTool />
          </div>
        </div>
      </div>
    </div>
  );
}
