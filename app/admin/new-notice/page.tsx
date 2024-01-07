"use client"

import NoticeForm from "@/components/forms/Notice.form";

const Page = () => {
  return (
      <div className="w-full flex flex-col items-center pt-20">
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
  );
};

export default Page
