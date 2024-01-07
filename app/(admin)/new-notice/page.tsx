"use client";

import NoticeForm from "@/components/forms/Notice.form";
import useUserStore from "@/store/useUserStore";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Page = () => {
  const router = useRouter();
  const isAdmin = useUserStore((state) => state.isAdmin);

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [warinig, setWarning] = useState<string>("잠시만 기다려주세요.");

  useEffect(() => {
    if (isAdmin) {
      setIsLoggedIn(true);
    }

    if (!isAdmin) {
      setWarning("관리자 로그인 이후 이용해주세요.");

      setTimeout(() => {
        router.push("/");
      }, 1500);
    }
  }, [isAdmin, router]);

  return (
    <div>
      {!isLoggedIn && <div className="absolute top-0 left-0 h-screen w-screen z-10 bg-gray-500/50">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="w-20 h-20 border-4 border-sky-800 border-b-sky-600 rounded-full animate-spin"></div>
          <p className="mt-4 text-xl font-semibold text-gray-700">{warinig}</p>
        </div>
      </div>}
      <div className="container px-1 lg:px-0">
        <div className="py-20 w-full flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold flex flex-col items-center text-sky-900">
            <span className="text-base md:text-lg lg:text-xl font-light text-pink-600">
              New Notification
            </span>
            새 공지사항 작성
          </h1>

          <div className="w-full max-w-[1000px] h-full">
            <NoticeForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
