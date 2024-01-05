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

export const getNoticeList = async (search: string, page: number = 1) => {
  let result: any = null;
  const limit = 10;

  try {
    await connectToDB();

    const regExp = new RegExp(search, "i");

    const noticeList = await Notice.find({
      title: regExp,
    }).sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .populate("author", "username")
      .lean();

    noticeList.forEach((notice: any) => {
      notice._id = notice._id.toString();
      notice.author = notice.author.username;
      notice.createdAt = notice.createdAt
        .toLocaleDateString("ko-KR", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        })
        .replace(".", "년")
        .replace(".", "월")
        .replace(".", "일");
    });

    const totalCount = await Notice.countDocuments();

    result = {
      ok: true,
      noticeList,
      currentPage: page,
      totalPages: Math.ceil(totalCount / limit),
    };
  } catch (error: any) {
    result = {
      ok: false,
      message: "공지사항 조회에 실패했습니다.",
      error: error.message,
    };
  }

  return result;
};
