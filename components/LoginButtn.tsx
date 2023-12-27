"use client";

import { useRouter } from "next/navigation";

const ToLoginButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/login");
  };
  return (
    <button
      onClick={handleClick}
      className="p-1 px-4 border rounded-full hover:bg-slate-50 hover:text-slate-900 hover:-translate-y-0.5 transition-all duration-300"
    >
      관리자 로그인
    </button>
  );
};

export default ToLoginButton;
