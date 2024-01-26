import * as z from "zod";

export const CounselFormValidation = z.object({
  name: z.string().min(2, { message: "이름은 2자 이상이어야 합니다." }),
  phone: z.string().min(10, { message: "전화번호는 10자 이상이어야 합니다." }),
  prefer_time: z.string().min(1, { message: "상담시간을 입력해주세요." }),
  content: z.string().min(1, { message: "내용을 작성해 주세요." }),
});
