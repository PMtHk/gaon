import { getNoticeList } from "@/lib/actions/notice.actions";
import { Separator } from "./ui/separator";

const Notice = async () => {
  const response = await getNoticeList();

  const { noticeList } = response;

  return (
    <div className="min-h-80 h-full w-full border-2 rounded-2xl flex flex-col items-center p-6 md:col-span-2 lg:col-span-1">
      <div className="w-full flex justify-between items-center">
        <span className="text-2xl font-bold text-slate-900">공지사항</span>
        <a
          className="font-semibold text-slate-600 hover:underline"
          href="/notices"
        >
          더보기
        </a>
      </div>

      <Separator className="mt-2 h-0.5" />

      <div className="w-full flex flex-col mt-4 gap-0.5">
        {noticeList &&
          noticeList.slice(0, 5).map((notice: any, index: number) => (
            <a
              href={`/notices/${notice._id}`}
              key={index}
              className="w-full flex justify-between items-center px-2 py-2 rounded-md hover:bg-slate-200"
            >
              <span className="text-lg text-slate-900">{notice.title}</span>
              <span className="hidden md:block text-sm text-slate-600 ml-2">
                {notice.createdAt}
              </span>
            </a>
          ))}
      </div>
    </div>
  );
};

export default Notice;
