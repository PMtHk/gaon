import AdminLoginButton from "./AdminLoginButton";

const Footer = () => {
  return (
    <footer className="w-full h-48 bg-neutral-600 p-6 relative">
      <div className="h-full flex flex-col justify-between items-center">
        <div className="relative flex flex-col text-slate-200 text-sm justify-center items-center gap-1">
          <div>
            <span className="mr-4">상호명 : 가온방문요양센터</span>
            <span>사업자 등록번호 : 303-80-28044</span>
          </div>
          <div>
            <a className="mr-4" href="tel:032-566-6645">
              전화 : 032-566-6645
            </a>
            <span>팩스 : 0508-959-5288</span>
          </div>
          <span>도로명주소 : 인천광역시 서구 승학로 403, 203호</span>
        </div>
        
        <AdminLoginButton />

        <span className="text-slate-200 text-sm">
          © 2023. 가온방문요양센터 all rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
