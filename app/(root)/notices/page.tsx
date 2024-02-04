import type { Metadata } from "next";

import { getNoticeList } from "@/lib/actions/notice.actions";
import NoticeRow from "./NoticeRow";
import Search from "./Search";
import NoticePagination from "./NoticePagination";

export const metadata: Metadata = {
  title: "공지사항 | 가온방문요양센터",
  description: "가온방문요양센터 공지사항입니다.",
};

const Page = async ({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}) => {
  const page =
    typeof searchParams.page === "string" ? parseInt(searchParams.page) : 1;

  const search =
    typeof searchParams.search === "string" ? searchParams.search : "";

  const response = await getNoticeList(search, page);

  const { noticeList, currentPage, totalPages } = response;

  return (
    <div className="w-full flex flex-col items-center">
      <div className="pt-20 pb-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold flex flex-col items-center text-sky-900">
          <span className="text-base md:text-lg lg:text-xl font-light text-pink-600">
            Notification
          </span>
          공지사항
        </h1>
      </div>
      <div className="w-full h-full container flex flex-col">
        <Search search={search} />

        <div className="px-1">
          <table className="w-full mt-10 text-sm md:text-base lg:text-lg">
            <thead className="w-full h-12 border-t-2 border-sky-800 bg-slate-200">
              <tr className=" w-full text-center">
                <th className="hidden md:table-cell md:w-1/12">번호</th>
                <th className="w-6/12 md:w-7/12 ">제목</th>
                <th className="w-2/12 md:w-2/12 ">글쓴이</th>
                <th className="w-2/12 md:w-2/12 ">작성일</th>
              </tr>
            </thead>
            <tbody className="gap-2">
              {noticeList &&
                noticeList.map((notice: any, index: number) => (
                  <NoticeRow key={index} {...notice} />
                ))}
              {!noticeList ||
                (noticeList.length === 0 && (
                  <tr
                    key={"no_notice"}
                    className="text-center h-16 border-b-2 hover:bg-slate-100 hover:cursor-pointer"
                  >
                    <td className="hidden md:table-cell text-slate-400">-</td>
                    <td className="text-left pl-2 md:pl-4">
                      검색된 게시글이 없습니다.
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="container w-full flex justify-end items-end pt-2 px-1">
        <a
          href="/admin/new-notice"
          className="border border-sky-900 p-1 px-2 md:p-2 md:px-4 rounded-lg hover:bg-sky-900 hover:text-white duration-150"
        >
          글쓰기
        </a>
      </div>
      <div className="my-4">
        <NoticePagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  );
};

export default Page;
