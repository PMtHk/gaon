"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { NoticeFormValidation } from "@/lib/validations/notice.validation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import TextEditor from "../TextEditor";
import { Button } from "../ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { updateNotice } from "@/lib/actions/notice.actions";

const NoticeUpdateForm = ({
  noticeId,
  title,
  content,
}: {
  noticeId: string;
  title: string;
  content: string;
}) => {
  const router = useRouter();

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
    resolver: zodResolver(NoticeFormValidation),
    defaultValues: {
      title: title,
      content: content,
    },
  });

  const onSubmit = async (data: z.infer<typeof NoticeFormValidation>) => {
    setIsLoading(true);

    try {

      if (noticeId === "") {
        setIsLoading(false);
        setAlert({
          isOpen: true,
          title: "공지사항 수정 실패",
          message: "공지사항 ID가 없습니다.",
          onClick: () => {
            setAlert({
              isOpen: false,
              title: "",
              message: "",
              onClick: () => {
                router.push("/notices");
              },
            });
          },
        });

        return;
      }

      const res = await updateNotice(
        noticeId,
        form.getValues("title"),
        form.getValues("content")
      );

      if (!res.ok) {
        setIsLoading(false);
        setAlert({
          isOpen: true,
          title: "공지사항 수정 실패",
          message: res.message,
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

      router.push(`/notices/${noticeId}`);
    } catch (error: any) {
      setIsLoading(false);
      setAlert({
        isOpen: true,
        title: "공지사항 수정 실패",
        message: error.message,
        onClick: () => {
          setAlert({
            isOpen: false,
            title: "",
            message: "",
            onClick: () => {},
          });
        },
      });
    }
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 md:space-y-6"
        >
          <div>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl pl-0.5">제목</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="제목을 입력해 주세요."
                      required
                      className="text-base"
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
                  <FormLabel className="text-xl pl-0.5">내용</FormLabel>
                  <FormControl>
                    <TextEditor
                      {...field}
                      className="w-full max-w-[1000px] h-[50vh] text-center pb-10"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            className="w-full text-base"
            disabled={isLoading}
          >
            수정하기
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

export default NoticeUpdateForm;
