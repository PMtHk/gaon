"use client";

import { deleteNotice } from "@/lib/actions/notice.actions";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { getAuth } from "@/lib/actions/user.actions";

const AdminDashboard = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const auth = async () => {
      const { ok } = await getAuth();

      if (!ok) {
        setIsLoggedIn(false);
        return;
      }

      setIsLoggedIn(true);
    };

    auth();
  }, []);

  const onClick = () => {
    router.push("/admin");
  };

  return (
    <div className="flex gap-1 ml-2">
      {isLoggedIn && (
        <button
          className="hover:scale-110 transition-all"
          onClick={onClick}
          disabled={!isLoggedIn}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#394150"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
          >
            <rect x="2" y="2" width="9" height="9" rx="2" />
            <rect x="13" y="2" width="9" height="9" rx="2" />
            <rect x="2" y="13" width="9" height="9" rx="2" />
            <rect x="13" y="13" width="9" height="9" rx="2" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default AdminDashboard;
