"use client";

import { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
import { CreateAdminValidation } from "@/lib/validations/user.validation";
import { createAdmin } from "@/lib/actions/user.actions";

interface CreateAdminProps {
  handleClose: () => void;
}

const CreateAdmin = ({ handleClose }: CreateAdminProps) => {
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
    resolver: zodResolver(CreateAdminValidation),
    defaultValues: {
      name: "",
      username: "",
      password: "",
      passwordConfirm: "",
      phone: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof CreateAdminValidation>) => {
    setIsLoading(true);

    const res = await createAdmin(
      data.username,
      data.name,
      data.password,
      data.phone
    );

    if (!res.ok) {
      setIsLoading(false);
      setAlert({
        isOpen: true,
        title: "관리자 계정 추가 실패",
        message: res.error,
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
      title: "관리자 계정 추가 성공",
      message: "새로운 관리자 계정이 추가되었습니다.",
      onClick: () => {
        handleClose();
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
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>아이디</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="tesxt"
                      placeholder="gaonCenter"
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
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>비밀번호</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="**********"
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
              name="passwordConfirm"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>비밀번호 확인</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="**********"
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
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>직책/표시될 이름 </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="관리자, 센터장, ..."
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
                      type="text"
                      placeholder="010-1234-5678"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            관리자 추가하기
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

export default CreateAdmin;
