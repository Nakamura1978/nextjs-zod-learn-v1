//全ユーザーの取得用ＡＰＩ

import { main, prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

//ユーザー登録用のＡＰＩ
export const POST = async (req: Request, res: NextResponse) => {
  try {
    await main();
    const { name, postNum, mail, prefecture, password } = await req.json();
    const user = await prisma.usr.create({
      data: { name, postNum, mail, prefecture, password },
    });
    return NextResponse.json({ message: "Success", user }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
