"use server";

import { revalidatePath } from "next/cache";
import Counsel from "../models/counsel.model";
import { connectToDB } from "../mongoose/mongoose";
import { sendMessage } from "./slack.actions";

export const createCounsel = async (
  name: string,
  phone: string,
  prefer_time: string,
  content: string
) => {
  let result: any = null;

  try {
    await connectToDB();

    const counsel = await Counsel.create({
      name,
      phone,
      prefer_time,
      content,
    });

    // TODO: Send SMS to admins

    const blocks = [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "새로운 상담 신청이 등록되었습니다.\n",
          // *<https://main.ddvcbq580qs3j.amplifyapp.com/admin/counsels|가온방문요양센터>*
        },
      },
      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: `*성함:*\n"${counsel.name}"`,
          },
          {
            type: "mrkdwn",
            text: `*전화번호:*\n"${counsel.phone}"`,
          },
          {
            type: "mrkdwn",
            text: `*상담 선호 시간:*\n"${counsel.prefer_time}"`,
          },
          {
            type: "mrkdwn",
            text: `*상담 내용:*\n"${counsel.content}"`,
          },
        ],
      },
    ];

    await sendMessage(blocks);

    result = {
      ok: true,
      message: "상담이 신청되었습니다.",
      counsel_id: counsel._id.toString(),
    };
  } catch (error: any) {
    result = {
      ok: false,
      message: "상담 신청에 실패했습니다.",
      error: error.message,
    };
  }

  revalidatePath("/admin/counsels");
  return result;
};

type Counsel = {
  cid: number;
  status: string;
  name: string;
  phone: string;
  prefer_time: string;
  content: string;
};

export const getCounselList = async () => {
  let result: any = null;

  try {
    await connectToDB();

    const counselList = (await Counsel.find({}).lean()) as Counsel[];

    result = {
      ok: true,
      counsels: counselList,
    };
  } catch (error: any) {
    result = {
      ok: false,
      message: "상담 목록을 불러오는데 실패했습니다.",
      error: error.message,
    };
  }

  return result;
};
