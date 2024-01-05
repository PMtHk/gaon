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

export const getNotice = async (_id: string) => {
  let result: any = null;

  try {
    await connectToDB();

    const notice = await Notice.findById(_id).populate("author", "username").lean();
    notice.author = notice.author.username;
    notice.createdAt = notice.createdAt.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",

    }).replace(".", "년").replace(".", "월").replace(".", "일");

    result = {
      ok: true,
      notice,
    }
  } catch (error: any) {
    result = {
      ok: false,
      message: "공지사항 조회에 실패했습니다.",
      error: error.message,
    };
  }

  return result;
}

export const getPrevNotice = async (_id: string) => {
  let result: any = null;

  try {
    await connectToDB();

    const prevNotice = await Notice.find({
      _id: { $lt: _id },
    }).sort({ _id: -1 }).limit(1).lean();

    prevNotice[0].author = prevNotice[0].author.username;
    prevNotice[0].createdAt = prevNotice[0].createdAt.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",

    }).replace(".", "년").replace(".", "월").replace(".", "일");

    result = {
      ok: true,
      prevNotice: prevNotice[0],
    };
  } catch (error: any) {
    result = {
      ok: false,
      message: "이전 공지사항 조회에 실패했습니다.",
      error: error.message,
    };
  }

  return result;
}

export const getNextNotice = async (_id: string) => {
  let result: any = null;

  try {
    await connectToDB();

    const nextNotice = await Notice.find({
      _id: { $gt: _id },
    }).sort({ _id: 1 }).limit(1).lean();

    nextNotice[0].author = nextNotice[0].author.username;
    nextNotice[0].createdAt = nextNotice[0].createdAt.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",

    }).replace(".", "년").replace(".", "월").replace(".", "일");

    result = {
      ok: true,
      nextNotice: nextNotice[0],
    };
  } catch (error: any) {
    result = {
      ok: false,
      message: "다음 공지사항 조회에 실패했습니다.",
      error: error.message,
    };
  }

  return result;
}

export const deleteNotice = async (_id: string) => {
  let result: any = null;

  try {
    await connectToDB();

    await Notice.findByIdAndDelete(_id);

    result = {
      ok: true,
      message: "공지사항이 삭제되었습니다.",
    };

    revalidatePath("/notice");
  } catch (error: any) {
    result = {
      ok: false,
      message: "공지사항 삭제에 실패했습니다.",
      error: error.message,
    };
  }

  return result;
}