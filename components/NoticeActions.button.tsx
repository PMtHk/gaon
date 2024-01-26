"use client";

import { deleteNotice } from "@/lib/actions/notice.actions";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import useUserStore from "@/store/useUserStore";
import { useEffect, useState } from "react";

const NoticeActions = ({ noticeId }: { noticeId: string }) => {
  const router = useRouter();

  const isLogin = useUserStore((state) => state.isLogin);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    if (isLogin) {
      setIsLoggedIn(true);
    }
  }, [isLogin]);

  const onClick = async () => {
    const response = await deleteNotice(noticeId);
    if (response) {
      router.push("/notices");
    }
  };

  return (
    <div className="flex gap-1">
      {isLoggedIn && (
        <a href={`/admin/notices/${noticeId}/update`}>
          <span className="flex items-center justify-center h-12 px-4 text-base font-medium border border-sky-900 rounded-lg hover:bg-sky-100">
            수정
          </span>
        </a>
      )}
      {isLoggedIn && (
        <Button
          className="h-12 px-4 text-base font-medium bg-red-600 hover:bg-red-700 text-white rounded-lg"
          onClick={onClick}
          disabled={!isLoggedIn}
        >
          삭제
        </Button>
      )}
    </div>
  );
};

export default NoticeActions;
