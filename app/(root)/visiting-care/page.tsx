import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "방문요양 | 가온방문요양센터",
  description: "방문요양서비스에 대한 안내입니다.",
};

const Page = () => {
  return (
    <div className="container w-full min-h-[100vh-64px] md:min-h-[100vh-80px]">
      <div className="mt-10 mb-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold flex flex-col items-center text-sky-900">
          <span className="text-base md:text-lg lg:text-xl font-light text-pink-600">
            Visiting Care
          </span>
          방문요양서비스
        </h1>
      </div>

      <div className="flex flex-col items-center p-4">
        <div className="md:text-center text-lg break-keep">
          <p className="max-w-3xl">
            방문요양 서비스는 국가자격을 소지한 요양보호사 선생님이 어르신의
            가정을 직접 방문하여 신체활동, 정서, 가사활동, 개인 활동 등을 지원해
            드리는 사회보험 서비스입니다.
          </p>
        </div>

        <div className="w-full mt-32 mb-32 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-sky-900 mb-12">
            방문요양서비스 항목
          </h2>
          <div className="w-full">
            <table className="w-full break-keep md:text-lg">
              <tbody>
                <tr className="bg-sky-100 border-b-1 border-sky-500 border-t">
                  <th className="w-[15%] p-4 border-r">대분류</th>
                  <th className="w-[20%] p-4 border-r">중분류</th>
                  <th className="p-4">소분류</th>
                </tr>
                <tr>
                  <td rowSpan={9} className="border-b border-r border-t border-t-sky-500 border-b-sky-500">
                    신체활동지원
                  </td>
                  <td className="border-b border-r border-t border-t-sky-500 p-2">안면청결도움</td>
                  <td className="border-b border-t border-t-sky-500">세면도움 · 면도도움</td>
                </tr>
                <tr>
                  <td className="border-b border-r p-2">구강청결도움</td>
                  <td className="border-b">구강청결 · 칫솔질 · 의치손질</td>
                </tr>
                <tr>
                  <td className="border-b border-r p-2">두발청결도움</td>
                  <td className="border-b">머리감기도움 · 침상 머리감기</td>
                </tr>
                <tr>
                  <td className="border-b border-r p-2">신체청결도움</td>
                  <td className="border-b">몸씻기도움 · 전신 및 부분닦기</td>
                </tr>
                <tr>
                  <td className="border-b border-r p-2">옷갈아입기도움</td>
                  <td className="border-b">
                    편마비시 옷갈아입기 · 똑바로 누워서 옷갈아입기
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-r p-2">식사도움</td>
                  <td className="border-b">일반식사 · 경관영양</td>
                </tr>
                <tr>
                  <td className="border-b border-r p-2">배설도움</td>
                  <td className="border-b">
                    변기사용도움 · 침상배변 · 배뇨도움 ·기저귀 교환 · 유치도뇨관
                    사용도움
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-r p-2">이동도움</td>
                  <td className="border-b">
                    침상 내 이동 · 휠체어 이동 · 보행돕기 · 계단 오르내리기 ·
                    보행보조차 사용
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-r border-b-sky-500 p-2">신체기능의 유지 증진</td>
                  <td className="border-b border-b-sky-500">
                    체위변경 · 복약도움
                  </td>
                </tr>
                <tr>
                  <td rowSpan={1} className="border-b border-r border-b-sky-500">
                    인지활동지원
                  </td>
                  <td className="border-b border-r border-b-sky-500 p-2">인지훈련</td>
                  <td className="border-b border-b-sky-500">인지 및 정신기능 훈련</td>
                </tr>
                <tr>
                  <td rowSpan={1} className="border-b border-r border-b-sky-500">
                    정서지원
                  </td>
                  <td className="border-b border-r border-b-sky-500 p-2">정서지원</td>
                  <td className="border-b border-b-sky-500">말벗 및 격려 · 여가활동</td>
                </tr>
                <tr>
                  <td rowSpan={5} className="border-b border-r border-b-sky-500">
                    가사 및 일상생활지원
                  </td>
                  <td className="border-b border-r p-2">식사준비</td>
                  <td className="border-b">음식조리 · 설거지 · 주방정리</td>
                </tr>
                <tr>
                  <td className="border-b border-r p-2">청소 및 주변정돈</td>
                  <td className="border-b">청소 · 수납장 정리</td>
                </tr>
                <tr>
                  <td className="border-b border-r p-2">세탁</td>
                  <td className="border-b">의복 세탁 및 관리 · 침구관리</td>
                </tr>
                <tr>
                  <td className="border-b border-r p-2">외출도움</td>
                  <td className="border-b">외출 동행 · 병원 동행</td>
                </tr>
                <tr>
                  <td className="border-b border-r border-b-sky-500 p-2">일상업무 대행</td>
                  <td className="border-b border-b-sky-500">일상업무 대행</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
