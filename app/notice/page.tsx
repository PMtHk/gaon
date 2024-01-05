import { getNoticeList } from "@/lib/actions/notice.actions";
import NoticeRow from "./NoticeRow";
import Search from "./Search";
import NoticePagination from "./NoticePagination";

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
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-4">
        <NoticePagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  );
};

export default Page;
