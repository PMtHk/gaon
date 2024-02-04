import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "인사말 | 가온방문요양센터",
  description: "가온방문요양센터 인사말입니다.",
};

const Page = () => {
  return (
    <div className="container w-full min-h-[100vh-64px] md:min-h-[100vh-80px]">
      <div className="mt-10 mb-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold flex flex-col items-center text-sky-900">
          <span className="text-base md:text-lg lg:text-xl font-light text-pink-600">
            Greetings
          </span>
          인사말
        </h1>
      </div>

      <div className="flex justify-center p-4">
        <div className="text-left text-lg max-w-[800px] break-keep">
          <p>
            안녕하세요.
            <br />
            <br />
            저희 가온 방문요양센터 홈페이지를 찾아주셔서 감사합니다.
            <br />
            <br />
            오늘날 우리사회는 초고령화 사회에 접어들어 가정 내 어르신들의 돌봄에
            있어 어려움을 겪는 일이 많아졌습니다. 사랑하는 우리 부모님의 걱정을
            조금이나마 덜어드리고 어르신들의 하루하루의 삶이 즐겁고 행복할 수
            있도록 최상의 장기요양서비스의 도움을 드리는 센터가 되도록
            노력하겠습니다.
            <br />
            <br />
            가족과 함께 한 추억이 가득 담긴 내집에서 마음이 따뜻한 요양보호사가
            정성과 사랑으로 우리의 소중한 부모님을 돌봐 드리도록 하겠습니다.
            개인별 맞춤형 서비스를 통해 소통과 배려로 점점 쇠약해지는 인지기능의
            유지를 위한 활동과, 어르신 신체기능에 맞춰 잔존기능을 유지하며
            신체기능의 호전을 위한 신체활동 지원등, 가사지원, 병원동행,
            정서지원이 이루어집니다.
            <br />
            <br />
            센터장이 직접 어르신을 정기적으로 찾아뵙고 부족한 부분을 파악하여
            어르신과 보호자님의 욕구 충족을 위한 노력을 하고 있습니다. 저희
            가온방문요양센터는 또 하나의 가족으로써 소중한 우리의 부모님을 질
            높은 서비스로 행복한 일상을 영위하실 수 있도록 최선을 다하겠습니다.
            <br />
            <br />
            감사합니다.
          </p>
          <p className="text-right align-text-bottom mt-10 mr-4 text-slate-600">
            센터장/사회복지사
            <span className="text-black text-2xl font-semibold pl-2">
              이 윤 정
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
