"use client";

import { updateCounselStatus } from "@/lib/actions/counsel.actions";
import { useState } from "react";

export const ActionBtn = ({ objectId }: { objectId: string }) => {
  const [isPending, setIsPending] = useState<boolean>(false);

  const handleComplete = async () => {
    setIsPending(true);
    await updateCounselStatus(objectId, "success");
    setIsPending(false);
  };

  return (
    <button
      className="bg-pink-400 hover:bg-blue-800 text-white font-bold py-1 px-2 rounded-lg"
      onClick={handleComplete}
      disabled={isPending}
    >
      {isPending ? "처리중" : "완료"}
    </button>
  );
};
