"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Counseling = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="rounded-full p-6 border-white border-2 shadow-2xl text-base lg:text-lg animate-up-down">
          상담 신청
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="">
        <SheetHeader>
          <SheetTitle>상담 신청하기</SheetTitle>
          <SheetDescription>
            상담 신청을 하시면, 저희가 빠르게 연락드리겠습니다.
          </SheetDescription>
        </SheetHeader>

        {/* form be here */}

        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Counseling;
