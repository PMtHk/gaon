import KakaoMap from "@/components/kakaoMap/KakaoMap";

const Page = () => {
  return (
    <div className="w-full flex flex-col pt-16 lg:pt-20 items-center">
      <div className="py-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold flex flex-col items-center text-sky-900">
          <span className="text-base md:text-lg lg:text-xl font-light text-pink-600">
            Directions
          </span>
          오시는길
        </h1>
      </div>

      <div className="w-full h-[480px] container flex flex-col mx-2 border border-sky-900">
        <KakaoMap />
      </div>

      <div className="w-full container grid grid-cols-3 mx-2 py-8 pb-24">
        <div className="flex flex-col items-center justify-start">
          <span className="text-3xl font-semibold text-sky-900 mb-6">주소</span>
          <span className="text-xl text-gray-500">
            인천 서구 승학로 403, 203호
          </span>
          <span className="text-xl text-gray-500">
            인천 서구 검암동 676-7, 203호
          </span>
        </div>

        <div className="flex flex-col items-center justify-start border-l-2 border-sky-900">
          <span className="text-3xl font-semibold text-sky-900 mb-6">전화</span>
          <span className="text-xl text-gray-500">032-566-6645</span>
        </div>

        <div className="flex flex-col items-center justify-start border-l-2 border-sky-900">
          <span className="text-3xl font-semibold text-sky-900 mb-6">팩스</span>
          <span className="text-xl text-gray-500">0508-959-5288</span>
        </div>
      </div>
    </div>
  );
};

export default Page;
