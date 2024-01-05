"use client";

import { deleteNotice } from "@/lib/actions/notice.actions";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import useUserStore from "@/store/useUserStore";
import { useEffect, useState } from "react";

const DeleteNoticeButton = ({ noticeId }: { noticeId: string }) => {
  const router = useRouter();

  const isAdmin = useUserStore((state) => state.isAdmin);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(()=> {
    if (isAdmin) {
      setIsLoggedIn(true);
    }
  }, [isAdmin])

  const onClick = async () => {
    const response = await deleteNotice(noticeId);
    if (response) {
      router.push("/notice");
    }
  };

  return (
    <div>
      {isLoggedIn && (
        <Button
          className="h-12 px-4 text-base font-medium text-white rounded-lg"
          onClick={onClick}
          disabled={!isLoggedIn}
        >
          삭제
        </Button>
      )}
    </div>
  );
};

export default DeleteNoticeButton;
