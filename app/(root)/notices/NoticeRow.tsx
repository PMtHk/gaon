"use client";

import { useRouter } from "next/navigation";

interface NoticeRowProps {
  id: number;
  _id: string;
  title: string;
  author: string;
  createdAt: string;
}

const NoticeRow = ({ _id, id,  title, author, createdAt }: NoticeRowProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/notices/${_id}`);
  };

  return (
    <tr
      key={_id}
      className="text-center h-16 border-b-2 hover:bg-slate-100 hover:cursor-pointer"
      onClick={onClick}
    >
      <td className="hidden md:table-cell text-slate-400">{id}</td>
      <td className="text-left pl-2 md:pl-4">{title}</td>
      <td className="">{author}</td>
      <td className="w-0 md:w-2/12">{createdAt}</td>
    </tr>
  );
};

export default NoticeRow;
