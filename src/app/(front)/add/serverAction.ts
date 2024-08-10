"use server";
import { authOptions } from "@/function/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const schema = z.object({
  title: z.string().min(1, "Judul tidak boleh kosong"),
  content: z.string().min(1, "Content tidak boleh kosong"),
});

const prisma = new PrismaClient();

export default async function PostAction(_prevState: any, params: FormData) {
  const session = await getServerSession(authOptions);

  const validation = schema.safeParse({
    title: params.get("title"),
    content: params.get("content"),
  });

  if (validation.success) {
    const posts = await prisma.post.create({
      data: {
        title: params.get("title") as string,
        content: params.get("content") as string,
        authorId: session?.user.id,
      },
    });
    if (posts.id) revalidatePath("/");
    redirect("/");
  } else {
    return {
      errors: validation.error.issues,
    };
  }
}
