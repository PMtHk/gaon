"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useToast } from "@/components/ui/use-toast";
import useUserStore from "@/store/useUserStore";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pahtname = usePathname();
  console.log(pahtname);
  const router = useRouter();
  const { toast } = useToast();
  const isLogin = useUserStore((state) => state.isLogin);

  useEffect(() => {
    if (!isLogin) {
      setTimeout(() => {
        toast({
          title: "로그인이 필요합니다.",
          description: "로그인 페이지로 이동합니다.",
          variant: "destructive",
          duration: 3000,
        });
      }, 1);
      router.push("/login");
    }
  }, [isLogin, router, toast]);

  return (
    <div>
    <Header />
    <div className="min-h-screen pt-16 lg:pt-20 px-1">{children}</div>
    <Footer />
  </div>
  );
};

export default Layout;
