import { authOptions } from "@/function/authOptions";
import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session)
    return Response.json(
      { error: "You must be logged in." },
      {
        status: 401,
      }
    );

  const data = await prisma.post.findUnique({
    where: {
      id: params.id,
    },
  });
  return Response.json({ data });
}
