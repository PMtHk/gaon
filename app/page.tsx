import Image from "next/image";
import CallInfo from "../components/CallInfo";
import Notice from "../components/Notice";
import VisitingCare from "../components/services/VisitingCare";
import VisitinbBathe from "../components/services/VisitinbBathe";
import Ranking from "../components/services/Ranking";
import CareTool from "../components/services/CareTool";

export default function Home() {
  return (
    <div className="flex flex-col pt-16 lg:pt-20">
      <div className="min-h-screen flex flex-col">
        <div className="w-full h-[70vh] md:h-[75vh] lg:h-[80vh] bg-home-intro bg-[65%_center] md:bg-[60%_center] lg:bg-[55%_center] bg-cover bg-no-repeat transition-all duration-500">
          <div className="opacity-0 lg:opacity-100 container flex flex-col p-1 px-2 justify-start items-start mt-16">
            <span className="text-4xl font-bold text-slate-50">
              가족 같은 마음으로
            </span>
            <span className="text-4xl font-bold first-line: text-slate-50">
              어르신을 정성껏 모시겠습니다.
            </span>
            <span className="mt-4 text-2xl font-bold text-slate-50">
              가온 방문요양센터를 찾아주셔서 감사합니다.
            </span>
          </div>
        </div>
        <div className="w-full h-[20vh] md:h-[15vh] lg:h-0 lg:opacity-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-slate-950">
            가족 같은 마음으로
          </span>
          <span className="text-2xl font-bold text-slate-950">
            어르신을 정성껏 모시겠습니다.
          </span>
          <span className="mt-4 text-xl font-semibold text-slate-950">
            가온 방문요양센터를 찾아주셔서 감사합니다.
          </span>
        </div>
      </div>

      <div className="container py-12">
        <div className="flex flex-col justify-center items-center mb-12">
          <p className="text-3xl lg:text-5xl font-semibold text-slate-700">
            가온 공지사항
          </p>
        </div>
        <div className="p-2 grid xl:grid-cols-2 gap-4">
          <Notice />
          <CallInfo />
        </div>
      </div>

      <div className="bg-neutral-200 py-12">
        <div className="container pt-16">
          <div className="flex flex-col justify-center items-center mb-12">
            <p className="text-3xl lg:text-5xl font-semibold text-slate-700">
              가온 방문요양서비스
            </p>
          </div>
          <div className="p-2 grid md:grid-cols-2 gap-6">
            <VisitingCare />
            <Ranking />
            <VisitinbBathe />
            <CareTool />
          </div>
        </div>
      </div>
    </div>
  );
}
