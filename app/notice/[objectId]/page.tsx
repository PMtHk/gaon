import { getNotice } from "@/lib/actions/notice.actions";

const NoticeViewPage = async ({
  params: { objectId },
}: {
  params: { objectId: string };
}) => {
  const response = await getNotice(objectId);

  const { notice } = response;
  const { title, author, createdAt, content } = notice;
  console.log(response);

  return (
    <div className="container mt-20 w-full border p-1">
      <h1 className="">{title}</h1>
    </div>
  )
};

export default NoticeViewPage;
