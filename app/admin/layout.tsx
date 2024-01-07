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
    return <div>loading</div>;
  }

  return (
    <div>
      <Header />
      <div className="min-h-screen pt-16 lg:pt-20 px-1">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
