"use server";

import { cookies } from "next/headers";

import Token from "../models/token.model";
import User from "../models/user.model";
import { connectToDB, disconnectFromDB } from "../mongoose/mongoose";
import { generateAccess, generateRefresh } from "../jwt/jwt";

export const createAdmin = async (username: string, password: string) => {
  let result: any = null;
  try {
    await connectToDB();

    const createdAdmin = await User.create({
      username,
      password,
    });

    result = {
      ok: true,
      message: "새 관리자가 생성되었습니다.",
      createdAdmin,
    };
  } catch (error: any) {
    result = {
      ok: false,
      message: "관리자 생성에 실패했습니다.",
      error: error.message,
    };
  } finally {
    await disconnectFromDB();
  }

  return result;
};

export const login = async (username: string, password: string) => {
  let result: any = null;
  try {
    await connectToDB();

    if (!username || !password) {
      result = {
        ok: false,
        message: "관리자 아이디와 패스워드를 바르게 입력해주세요.",
      };
    }

    const targetAdmin = await User.findOne({
      username,
    });

    if (!targetAdmin) {
      result = {
        ok: false,
        message: "해당 관리자 아이디가 존재하지 않습니다.",
      };

      return result;
    }

    const isMatch = await targetAdmin.comparePassword(password);

    console.log(isMatch);

    if (!isMatch) {
      result = {
        ok: false,
        message: "패스워드가 일치하지 않습니다.",
      };

      return result;
    }

    // generate access, refresh token
    const accessToken = generateAccess(targetAdmin._id, targetAdmin.username);
    const refreshToken = generateRefresh(targetAdmin._id);

    const existRefreshToken = await Token.findOne({ user_id: targetAdmin._id });

    if (existRefreshToken) await Token.deleteOne({ user_id: targetAdmin._id });

    await Token.create({
      user_id: targetAdmin._id,
      refresh_token: refreshToken,
    });

    cookies().set({
      name: "gaon_refresh_token",
      value: accessToken,
      path: "/",
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 14),
      httpOnly: true,
      sameSite: "strict",
    });

    result = {
      ok: true,
      message: "로그인에 성공했습니다.",
      accessToken,
    };
  } catch (error: any) {
    result = {
      ok: false,
      message: "로그인에 실패했습니다. 잠시 후 다시 시도해주세요.",
      error: error.message,
    };

    console.log(error);
  } finally {
    await disconnectFromDB();
  }

  return result;
};
