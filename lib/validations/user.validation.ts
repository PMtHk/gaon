import * as z from "zod";

export const LoginFormValidation = z.object({
  username: z.string().min(1, { message: "관리자 아이디를 입력해주세요." }),
  password: z.string().min(8, { message: "비밀번호는 8자 이상이어야 합니다." }),
});

export const CreateAdminValidation = z
  .object({
    name: z.string().min(1, { message: "직책을 입력해주세요." }),
    username: z.string().min(1, { message: "아이디를 입력해주세요." }),
    phone: z.string().min(1, { message: "전화번호를 입력해주세요." }),
    password: z
      .string()
      .min(8, { message: "비밀번호는 8자 이상이어야 합니다." }),
    passwordConfirm: z.string(),
  })
  .refine((schema) => schema.password === schema.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "비밀번호와 비밀번호 확인이 일치하지 않습니다.",
  });
