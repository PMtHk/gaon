import * as z from 'zod';

export const NoticeFormValidation = z.object({
  title: z.string().min(5, { message: '제목은 5자 이상이어야 합니다.' }),
  content: z.string().min(1, { message: '내용을 작성해 주세요.' })
})