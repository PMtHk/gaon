import Link from "next/link";
import AdminDashboard from "./AdminDashboard.button";
import RightSideMenu from "./RightSideMenu";

const Header = () => {
  return (
    <header className="w-full fixed h-16 lg:h-20 bg-slate-50 px-4 border-b border-sky-900 z-50">
      <div className="container relative w-full h-full flex flex-row items-center justify-between ">
        <Link
          href="/"
          aria-label="가온방문요양센터 홈으로 이동"
          className="text-2xl lg:text-3xl font-semibold lg:font-bold text-sky-900"
        >
          <span className="text-pink-500 mr-1">가온</span>
          방문요양센터
        </Link>
        <nav className="hidden md:flex h-full items-center text-lg lg:text-xl font-semibold text-gray-700">
          <div className="group h-full w-28 relative inline-block m-auto">
            <Link
              href="/greetings"
              className="h-full w-full flex items-center justify-center group-hover:scale-110 transition-all duration-300"
            >
              센터소개
            </Link>
            <div className="opacity-0 -translate-y-2 w-28 group-hover:opacity-100 group-hover:translate-y-0 flex flex-col bg-slate-50 border-sky-900 transition-all duration-500 mt-2 border rounded-md">
              <div className="w-full h-12 flex items-center justify-center hover:bg-sky-900 hover:text-slate-50 border-b border-sky-900">
                <Link
                  href="/greetings"
                  className="no-underline block text-base"
                >
                  인사말
                </Link>
              </div>
              <div className="w-full h-12 flex items-center justify-center hover:bg-sky-900 hover:text-slate-50">
                <Link
                  href="/directions"
                  className="no-underline block text-base"
                >
                  오시는 길
                </Link>
              </div>
            </div>
          </div>

          <div className="group h-full w-48 relative inline-block m-auto">
            <Link
              href="/policy"
              className="h-full w-full flex items-center justify-center group-hover:scale-110 transition-all duration-300"
            >
              노인장기요양보험
            </Link>
            <div className="opacity-0 -translate-y-2 w-48 group-hover:opacity-100 group-hover:translate-y-0 flex flex-col bg-slate-50 border-sky-900 transition-all duration-500 mt-2 border rounded-md">
              <div className="w-full h-12 flex items-center justify-center hover:bg-sky-900 hover:text-slate-50 border-b border-sky-900">
                <Link href="/policy" className="no-underline block text-base">
                  노인장기요양보험이란?
                </Link>
              </div>
              <div className="w-full h-12 flex items-center justify-center hover:bg-sky-900 hover:text-slate-50">
                <Link
                  href="/visiting-care"
                  className="no-underline block text-base"
                >
                  방문요양 서비스 소개
                </Link>
              </div>
            </div>
          </div>

          <div className="group h-full w-28 relative inline-block m-auto">
            <Link
              href="/notices"
              className="h-full w-full flex items-center justify-center group-hover:scale-110 transition-all duration-300"
            >
              공지사항
            </Link>
          </div>

          <AdminDashboard />
        </nav>
        <RightSideMenu />
      </div>
    </header>
  );
};

export default Header;
