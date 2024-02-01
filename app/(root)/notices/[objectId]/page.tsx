import NoticeActions from "@/components/NoticeActions.button";
import { Separator } from "@/components/ui/separator";
import {
  getNextNotice,
  getNotice,
  getPrevNotice,
} from "@/lib/actions/notice.actions";
import { notFound } from "next/navigation";

const NoticeViewPage = async ({
  params: { objectId },
}: {
  params: { objectId: string };
}) => {
  const response = await getNotice(objectId);

  const { notice } = response;
  if (!notice) {
    notFound();
  }
  const { title, author, createdAt, content } = notice;

  const prevNotice = await getPrevNotice(objectId);
  const nextNotice = await getNextNotice(objectId);

  return (
    <div className="container mt-20 w-full px-2 md:px-4">
      {/* notice header */}
      <div>
        <h1 className="text-3xl font-semibold">{title}</h1>
        <div className="flex flex-row justify-between items-center mt-2">
          <span className="text-gray-700">{author}</span>
          <span className="text-gray-700">{createdAt.toString()}</span>
        </div>
        <Separator className="mt-2 mb-6 h-0.5" />
      </div>

      {/* main */}
      <div
        id="notice-content"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
        className="min-h-[40vh] [&>h1]:text-3xl [&>h2]:text-2xl [&>h3]:text-xl [&>h4]:text-lg [&>h5]:text-base [&>h6]:text-sm"
      />

      {/* notice footer */}
      <div>
        <Separator className="mt-6 mb-2 h-0.5" />
        <a
          href={
            nextNotice.nextNotice
              ? `/notices/${nextNotice.nextNotice?._id}`
              : "#"
          }
          className="mb-0.5 w-full min-h-12 flex items-center px-4 gap-2 border-2 rounded-md border-slate-200 hover:bg-slate-100"
        >
          <span className="flex-none">다음글</span>
          <span className="grow pl-4 py-1">
            {nextNotice.nextNotice
              ? nextNotice.nextNotice.title
              : "다음글이 존재하지 않습니다."}
          </span>
          <span className="flex-none hidden md:flex">
            {nextNotice.nextNotice
              ? nextNotice.nextNotice.createdAt.toString()
              : ""}
          </span>
        </a>
        <a
          href={
            prevNotice.prevNotice
              ? `/notices/${prevNotice.prevNotice?._id}`
              : "#"
          }
          className="w-full min-h-12 flex items-center px-4 gap-2 border-2 rounded-md border-slate-200 hover:bg-slate-100"
        >
          <span className="flex-none">이전글</span>
          <span className="grow pl-4 py-1">
            {prevNotice.prevNotice
              ? prevNotice.prevNotice.title
              : "이전글이 존재하지 않습니다."}
          </span>
          <span className="flex-none hidden md:flex">
            {prevNotice.prevNotice
              ? prevNotice.prevNotice.createdAt.toString()
              : ""}
          </span>
        </a>
      </div>
      <div className="flex justify-end items-center mt-1 mb-10 gap-1">
        <NoticeActions noticeId={objectId} />
        <a
          href="/notices"
          className="h-12  rounded-lg border border-sky-900  flex items-center justify-center px-2 hover:bg-sky-100"
        >
          목록으로
        </a>
      </div>
    </div>
  );
};

export default NoticeViewPage;
function getgetNextNotice(objectId: string) {
  throw new Error("Function not implemented.");
}
