"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CounselFormValidation } from "@/lib/validations/counsel.validation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "../ui/textarea";
import { createCounsel } from "@/lib/actions/counsel.actions";

interface CounselFormProps {
  handleSheetClose: () => void;
}

const CounselForm = ({ handleSheetClose }: CounselFormProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    onClick: () => void;
  }>({
    isOpen: false,
    title: "",
    message: "",
    onClick: () => {},
  });

  const form = useForm({
    resolver: zodResolver(CounselFormValidation),
    defaultValues: {
      name: "",
      phone: "",
      prefer_time: "",
      content: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof CounselFormValidation>) => {
    setIsLoading(true);

    const res = await createCounsel(
      data.name,
      data.phone,
      data.prefer_time,
      data.content
    );

    if (!res.ok) {
      setIsLoading(false);
      setAlert({
        isOpen: true,
        title: "상담 신청 실패",
        message: "잠시 후 다시 시도해주세요.",
        onClick: () => {
          setAlert({
            isOpen: false,
            title: "",
            message: "",
            onClick: () => {},
          });
        },
      });

      return;
    }

    setAlert({
      isOpen: true,
      title: "상담 신청 완료",
      message: "감사합니다. 저희가 빠른 시일 내에 연락드리겠습니다.",
      onClick: () => {
        handleSheetClose();
      },
    });

    setIsLoading(false);
  };

  return (
    <div>
      <Form {...form}>
        <form
          className="space-y-4 md:space-y-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이름</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="이가온"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>전화번호</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="tel"
                      placeholder="010-1234-5678"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <FormField
              control={form.control}
              name="prefer_time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>상담 가능 시간</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="예) 평일 10:00 ~ 12:00"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>상담 내용</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="원하시는 상담 내용을 입력해주세요."
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            상담 신청하기
          </Button>
        </form>
      </Form>

      <AlertDialog open={alert.isOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{alert.title}</AlertDialogTitle>
            <AlertDialogDescription>{alert.message}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={alert.onClick}>확인</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default CounselForm;
