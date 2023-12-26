"use server";

import mongoose from "mongoose";

const { MONGODB_URI } = process.env;

if (MONGODB_URI === undefined) throw new Error("MONGODB_URI not defined.");

let isConnected: boolean = false;
// 현재 mongoose connection이 존재하는지 확인하기 위한 변수

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) return;

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "gaon",
    });
    isConnected = true;
  } catch (error: any) {
    console.log("=> error connecting to database: ", error);
  }
};

export const disconnectFromDB = async () => {
  if (!isConnected) return;

  try {
    await mongoose.connection.close();
    isConnected = false;
  } catch (error: any) {
    console.log("=> error disconnecting from database: ", error);
  }
};
