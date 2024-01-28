import * as z from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const CounselFormValidation = z.object({
  name: z.string().min(1, { message: "이름을 작성해 주세요." }),
  phone: z
    .string()
    .min(10, "전화번호를 정확히 입력해주세요.")
    .max(14, "전화번호를 정확히 입력해주세요.")
    .regex(phoneRegex, "전화번호를 정확히 입력해 주세요."),
  prefer_time: z.string(),
  content: z.string().min(1, { message: "내용을 작성해 주세요." }),
});
