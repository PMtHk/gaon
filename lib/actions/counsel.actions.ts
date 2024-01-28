"use server"

import Counsel from "../models/counsel.model";
import { connectToDB } from "../mongoose/mongoose";

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

    result = {
      ok: true,
      message: "상담이 신청되었습니다.",
      counsel_id: counsel._id,
    };
  } catch (error: any) {
    result = {
      ok: false,
      message: "상담 신청에 실패했습니다.",
      error: error.message,
    };
  }

  return result;
};
