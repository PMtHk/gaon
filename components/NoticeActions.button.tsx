"use client";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { deleteNotice } from "@/lib/actions/notice.actions";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getAuth } from "@/lib/actions/user.actions";

const NoticeActions = ({ noticeId }: { noticeId: string }) => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(false);

  useEffect(() => {
    const auth = async () => {
      const { ok } = await getAuth();

      if (!ok) {
        setIsLoggedIn(false);
      }

      setIsLoggedIn(true);
    };

    auth();
  }, []);

  const onClick = () => {
    setIsConfirmOpen(true);
  }

  const onCancle = () => {
    setIsConfirmOpen(false);
  }

  const onConfirm = async () => {
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

      <AlertDialog open={isConfirmOpen} onOpenChange={setIsConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>공지사항을 삭제하시겠습니까?</AlertDialogTitle>
            <AlertDialogDescription>
              삭제된 공지사항은 복구할 수 없습니다.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={onCancle}>취소</AlertDialogCancel>
            <AlertDialogAction onClick={onConfirm} className="bg-red-600 hover:bg-red-700">삭제</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default NoticeActions;
