"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useToast } from "@/components/ui/use-toast";
import { getAuth } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { push } = useRouter();
  const { toast } = useToast();

  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const { ok } = await getAuth();

      if (!ok) {
        setTimeout(() => {
          toast({
            title: "로그인이 필요합니다.",
            description: "로그인 페이지로 이동합니다.",
            variant: "destructive",
            duration: 3000,
          });
        }, 1);
        push("/login");
        return;
      }

      setIsSuccess(true);
    })();
  }, [push, toast]);

  if (!isSuccess) {
    return (
      <div className="container w-full h-screen flex flex-col items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#21496B"
          width="40px"
          height="40px"
          viewBox="0 0 1024 1024"
          className="animate-spin mb-8"
        >
          <path d="M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z" />
        </svg>
        <h1 className="text-2xl lg:text-3xl font-semibold text-sky-900">
          관리자 권환 확인중입니다.
        </h1>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="min-h-screen pt-16 lg:pt-20 px-1 container">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
