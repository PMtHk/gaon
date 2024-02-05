"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "./ui/separator";
import { useState } from "react";

const RightSideMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <Sheet onOpenChange={setIsMenuOpen} open={isMenuOpen}>
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="sr-only">메뉴 열기</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-screen md:hidden">
        <SheetHeader>
          <SheetTitle>
            <Link
              href="/"
              aria-label="가온방문요양센터 홈으로 이동"
              className="text-2xl font-semibold lg:font-bold text-sky-900"
              onClick={handleLinkClick}
            >
              <span className="text-pink-500 mr-1">가온</span>
              방문요양센터
            </Link>
          </SheetTitle>
          <SheetDescription className="text-base">
            가온에 방문해주셔서 감사합니다.
          </SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col justify-center items-center mt-6 text-xl font-semibold gap-4">
          <Link
            href="/greetings"
            className="text-2xl font-bold mt-2 text-sky-900"
            onClick={handleLinkClick}
          >
            센터소개
          </Link>
          <Separator className="mt-1" />

          <Link href="/greetings" onClick={handleLinkClick}>
            인사말
          </Link>
          <Link href="/directions" onClick={handleLinkClick}>
            오시는 길
          </Link>

          <Link
            href="/policy"
            className="text-2xl font-bold mt-6 text-sky-900"
            onClick={handleLinkClick}
          >
            노인장기요양보험
          </Link>
          <Separator className="mt-1" />
          <Link href="/policy" onClick={handleLinkClick}>
            노인장기요양보험이란?
          </Link>
          <Link href="/visiting-care" onClick={handleLinkClick}>
            방문요양 서비스 소개
          </Link>

          <Link
            href="/notices"
            className="text-2xl font-bold mt-6 text-sky-900"
            onClick={handleLinkClick}
          >
            공지사항
          </Link>
          <Separator className="mt-1" />
          <Link href="/notices" onClick={handleLinkClick}>
            공지사항
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default RightSideMenu;
