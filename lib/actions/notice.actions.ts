"use server";

import { revalidatePath } from "next/cache";
import Notice from "../models/notice.model";
import { connectToDB } from "../mongoose/mongoose";
import { getUserId } from "./user.actions";

export const createNotice = async (title: string, content: string) => {
  let result: any = null;

  try {
    await connectToDB();

    const user_id = getUserId();

    await Notice.create({
      title,
      content,
      author: user_id,
      createdAt: Date.now(),
    });

    result = {
      ok: true,
      message: "새 공지사항이 생성되었습니다.",
    };

    revalidatePath("/notice");
  } catch (error: any) {
    result = {
      ok: false,
      message: "공지사항 생성에 실패했습니다.",
      error: error.message,
    };
    console.log(error);
  }

  return result;
};
