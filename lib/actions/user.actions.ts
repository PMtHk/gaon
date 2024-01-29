"use server";

import { cookies } from "next/headers";

import Token from "../models/token.model";
import User from "../models/user.model";
import { connectToDB, disconnectFromDB } from "../mongoose/mongoose";
import { generateAccess, generateRefresh, verifyAccess } from "../jwt/jwt";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export const createAdmin = async (
  username: string,
  name: string,
  password: string,
  phone: string
) => {
  let result: any = null;
  try {
    await connectToDB();

    const createdAdmin = await User.create({
      username,
      name,
      password,
      phone,
    });

    result = {
      ok: true,
      message: "새 관리자가 생성되었습니다.",
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
      name: "gaon_access_token",
      value: accessToken,
      path: "/",
      expires: new Date(Date.now() + 1000 * 60 * 60 * 3),
      httpOnly: true,
      sameSite: "strict",
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

export const getUserId = () => {
  try {
    // get access token from cookie
    const cookieStore = cookies();
    const access_body:
      | {
          name: string;
          value: string;
        }
      | undefined = cookieStore.get("gaon_access_token");

    if (!access_body) throw new Error(`다시 로그인해주세요.`);
    const access_token = access_body.value;

    // get user_id from access token subject
    const { _id: user_id } = verifyAccess(access_token);
    return user_id;
  } catch (error: any) {
    throw new Error(`로그인 정보 없음. ${error.message}`);
  }
};

export const getAuth = async () => {
  const cookieStore = cookies();

  const accessToken: RequestCookie | undefined =
    cookieStore.get("gaon_access_token");
  const refreshToken: RequestCookie | undefined =
    cookieStore.get("gaon_refresh_token");

  if (!accessToken) {
    // access token not exist -> check refresh token
    if (!refreshToken) {
      return {
        ok: false,
        message: "로그인 정보가 없습니다.",
      };
    }

    // TODO: refresh access token with refresh token
  }

  try {
    // access token exist -> check access token
    const { ok, _id } = verifyAccess(accessToken?.value!);

    if (!ok) {
      return {
        ok: false,
        message: "로그인 정보가 없습니다.",
      };
    }

    return {
      ok: true,
      _id,
    };
  } catch (error: any) {
    return {
      ok: false,
      message: "로그인 정보가 없습니다.",
      error: error.message,
    };
  }
};
