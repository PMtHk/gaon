import * as z from 'zod';

export const LoginFormValidation = z.object({
  username: z
    .string()
    .min(1, { message: '관리자 아이디를 입력해주세요.' }),
  password: z
    .string()
    .min(8, { message: '비밀번호는 8자 이상이어야 합니다.' })
});