import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export const main = async () => {
  try {
    await prisma.$connect();
  } catch (err) {
    return Error("接続に失敗しました。");
  }
};
