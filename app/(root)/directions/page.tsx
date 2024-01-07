import KakaoMap from "@/components/kakaoMap/KakaoMap";

const Page = () => {
  return (
    <div className="container w-full min-h-[100vh-64px] md:min-h-[100vh-80px]">
      <div className="py-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold flex flex-col items-center text-sky-900">
          <span className="text-base md:text-lg lg:text-xl font-light text-pink-600">
            Directions
          </span>
          오시는길
        </h1>
      </div>

      <div className="w-full h-[480px] container flex flex-col px-2 border-sky-900">
        <KakaoMap />
      </div>

      <div className="w-full container grid grid-rows-1 md:grid-cols-3 mx-2 py-8 pb-24 gap-5 md:gap-2">
        <div className="w-full flex flex-col items-center justify-start">
          <span className="text-xl lg:text-3xl font-semibold text-sky-900 mb-2 px-1">주소</span>
          <span className="lg:text-xl text-gray-500">
            인천 서구 승학로 403, 203호
          </span>
          <span className="lg:text-xl text-gray-500">
            인천 서구 검암동 676-7, 203호
          </span>
        </div>

        <div className="w-full flex flex-col items-center justify-start md:border-l-2 border-sky-900 px-1">
          <span className="text-xl lg:text-3xl font-semibold text-sky-900 mb-2">전화</span>
          <span className="lg:text-xl text-gray-500">032-566-6645</span>
        </div>

        <div className="w-full flex flex-col items-center justify-start md:border-l-2 border-sky-900 px-1">
          <span className="text-xl lg:text-3xl font-semibold text-sky-900 mb-2">팩스</span>
          <span className="lg:text-xl text-gray-500">0508-959-5288</span>
        </div>
      </div>
    </div>
  );
};

export default Page;
