const Footer = async () => {
  return (
    <footer className="w-full h-48 bg-neutral-600 px-2">
      <div className="container h-full relative py-4">
        <div className="flex flex-col text-slate-200 text-sm  sm:text-base justify-center gap-1">
          <div>
            <span className="mr-4">상호명 : 가온방문요양센터</span>
            <span>사업자 등록번호 : 123-45-67890</span>
            {/* TODO: 사업자 등록번호 입력할 것 */}
          </div>
          <div>
            <a className="mr-4" href="tel:032-566-6645">전화 : 032-566-6645</a>
            <span>팩스 : 0508-959-5288</span>
          </div>
          <span>도로명주소 : 인천광역시 서구 승학로 403, 203호</span>
        </div>
        <div className="absolute bottom-2 left-0">
          <span className="text-slate-200 text-sm">
            © 2023. 가온방문요양센터 all rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
