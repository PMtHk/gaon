"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginFormValidation } from "@/lib/validations/user.validations";

import useUserStroe from "@/store/useUserStore";

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
import { login } from "@/lib/actions/user.actions";

const LoginForm = () => {
  const router = useRouter();

  const setIsAdmin = useUserStroe((state) => state.setIsAdmin);
  const setAccessToken = useUserStroe((state) => state.setAccessToken);

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
    resolver: zodResolver(LoginFormValidation),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && alert.isOpen) {
      setAlert({
        isOpen: false,
        title: "",
        message: "",
        onClick: () => {},
      })

      form.reset();

      return;
    }
  };

  const onSubmit = async (data: z.infer<typeof LoginFormValidation>) => {
    setIsLoading(true);

    try {
      const res = await login(
        form.getValues("username"),
        form.getValues("password")
      );

      if (!res.ok) {
        setIsLoading(false);
        setAlert({
          isOpen: true,
          title: "로그인 실패",
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

      setIsAdmin(true);
      setAccessToken(res.accessToken);

      setIsLoading(false);
      router.push("/admin");
    } catch (error: any) {
      setIsLoading(false);
      setAlert({
        isOpen: true,
        title: "로그인 실패",
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
    <div  onKeyDown={handleKeyDown}>
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
                  <FormLabel>관리자 아이디</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="admin1234"
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
                      placeholder="••••••••"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full">
            관리자 로그인하기
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

export default LoginForm;
