import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "./ui/separator";

const RightSideMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" className="text-base">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28px"
            height="32px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span className="sr-only">메뉴 열기</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-screen md:hidden">
        <SheetHeader>
          <SheetTitle>
            <a
              href="/"
              aria-label="가온방문요양센터 홈으로 이동"
              className="text-2xl font-semibold lg:font-bold text-sky-900"
            >
              <span className="text-pink-500 mr-1">가온</span>
              방문요양센터
            </a>
          </SheetTitle>
          <SheetDescription className="text-base">
            가온에 방문해주셔서 감사합니다.
          </SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col justify-center items-center mt-6 text-xl font-semibold gap-4">
          <a href="/about" className="text-2xl font-bold mt-2 text-sky-900">
            센터소개
          </a>
          <Separator className="mt-1" />

          <a href="/about">인사말</a>
          <a href="/directions">오시는 길</a>

          <a href="/policy" className="text-2xl font-bold mt-6 text-sky-900">
            노인장기요양보험
          </a>
          <Separator className="mt-1" />
          <a href="/policy">노인장기요양보험이란?</a>
          <a href="/visiting-care">방문요양 서비스 소개</a>

          <a href="/notice" className="text-2xl font-bold mt-6 text-sky-900">
            공지사항
          </a>
          <Separator className="mt-1" />
          <a href="/notice">공지사항</a>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default RightSideMenu;
