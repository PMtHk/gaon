"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CounselForm from "./forms/Counsel.form";
import { useState } from "react";

const Counseling = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button className="rounded-full p-6 border-white border-2 shadow-2xl text-base lg:text-lg animate-up-down">
          상담 신청
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="rounded-t-2xl flex justify-center">
        <div className="w-full max-w-[640px]">
          <SheetHeader>
            <SheetTitle>상담 신청하기</SheetTitle>
            <SheetDescription className="pb-4">
              상담 신청을 하시면, 편하신 시간에 맞춰 저희가 연락드리겠습니다.
            </SheetDescription>
          </SheetHeader>

          {/* form be here */}
          <CounselForm handleSheetClose={() => setIsOpen(false)} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Counseling;
