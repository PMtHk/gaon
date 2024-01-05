"use client";

import useUserStore from "@/store/useUserStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ToLoginButton = () => {
  const router = useRouter();
  const isAdmin = useUserStore((state) => state.isAdmin);
  const setIsAdmin = useUserStore((state) => state.setIsAdmin);
  const setAccessToken = useUserStore((state) => state.setAccessToken);

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    if (isAdmin) {
      setIsLoggedIn(true);
    }
  }, [isAdmin])

  const handleClick = () => {
    if (isLoggedIn) {
      setIsAdmin(false);
      setAccessToken("");

      setIsLoggedIn(false);
      router.push("/")
      return;
    }
    router.push("/login");
  };

  return (
    <button
      onClick={handleClick}
      className="p-1 px-4 border rounded-full hover:bg-slate-50 hover:text-slate-900 hover:-translate-y-0.5 transition-all duration-300"
    >
      {!isLoggedIn ? "관리자 로그인" : "로그아웃"}
    </button>
  );
};

export default ToLoginButton;
