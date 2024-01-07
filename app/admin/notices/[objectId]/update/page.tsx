import NoticeUpdate from "@/components/forms/NoticeUpdate.form";
import { getNotice } from "@/lib/actions/notice.actions";

const Page = async ({
  params: { objectId },
}: {
  params: { objectId: string };
}) => {
  const response = await getNotice(objectId);

  const { notice } = response;
  const { title, author, createdAt, content } = notice;

  return (
    <div className="w-full flex flex-col items-center pt-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold flex flex-col items-center text-sky-900">
        <span className="text-base md:text-lg lg:text-xl font-light text-pink-600">
          Update Notification
        </span>
        공지사항 수정
      </h1>

      <div className="w-full max-w-[1000px] h-full">
        <NoticeUpdate title={title} content={content} noticeId={objectId} />
      </div>
    </div>
  );
};

export default Page;
