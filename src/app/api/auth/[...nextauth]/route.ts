import { authOptions } from "@/function/authOptions";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const handler = async (req: NextRequest, res: NextResponse) => {
  const cookieStore = cookies();
  const rememberMe = cookieStore.get("rememberMe");
  let maxAge = 24 * 60 * 60;
  if (rememberMe) {
    maxAge = rememberMe.value == "on" ? 30 * 24 * 60 * 60 : 24 * 60 * 60;
  }
  return NextAuth(
    req as unknown as NextApiRequest,
    res as unknown as NextApiResponse,
    {
      ...authOptions,
      session: { maxAge: maxAge },
    }
  );
};

export { handler as GET, handler as POST };
