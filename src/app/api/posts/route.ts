import { authOptions } from "@/function/authOptions";
import { useRoleAccess } from "@/function/rolesServers";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export async function GET() {
  const session = await getServerSession(authOptions);
  const { read } = await useRoleAccess({
    page: "posts",
  });

  if (!session)
    return Response.json(
      { error: "You must be logged in." },
      {
        status: 401,
      }
    );

  if (!read)
    return Response.json(
      { error: "You not allowed" },
      {
        status: 403,
      }
    );

  const data = await prisma.post.findMany();
  return Response.json({ data });
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  const { create } = await useRoleAccess({
    page: "posts",
  });

  if (!session)
    return Response.json(
      { error: "You must be logged in." },
      {
        status: 401,
      }
    );
  if (!create)
    return Response.json(
      { error: "You not allowed" },
      {
        status: 403,
      }
    );

  const formData = await request.formData();
  const name = formData.get("title") as string;
  const email = formData.get("content") as string;
  const pblsh = formData.get("published") as string;
  const aId = formData.get("authorId") as string;

  const posts = await prisma.post.create({
    data: {
      title: name,
      content: email,
      authorId: aId,
    },
  });
  if (posts.id) revalidatePath("/");
  return Response.json(posts);
}

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session)
    return Response.json(
      { error: "You must be logged in." },
      {
        status: 401,
      }
    );

  const formData = await request.formData();
  const id = formData.get("id") as string;
  const ttl = formData.get("title") as string;
  const cntnt = formData.get("content") as string;

  const updatePosts = await prisma.post.update({
    where: {
      id: id,
    },
    data: {
      title: ttl,
      content: cntnt,
    },
  });

  return Response.json(updatePosts);
}

export async function DELETE(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session)
    return Response.json(
      { error: "You must be logged in." },
      {
        status: 401,
      }
    );

  const formData = await request.formData();
  const id = formData.get("id") as string;

  const deleteUsers = await prisma.post.deleteMany({
    where: {
      id: {
        equals: id,
      },
    },
  });

  return Response.json(deleteUsers);
}
