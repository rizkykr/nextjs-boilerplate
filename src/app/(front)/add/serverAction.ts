"use server";
import { authOptions } from "@/function/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { z } from "zod";
import { APIHandler } from "@/function/api";
import { headers } from "next/headers";

const schema = z.object({
  title: z.string().min(1, "Judul tidak boleh kosong"),
  content: z.string().min(1, "Content tidak boleh kosong"),
});

export default async function PostAction(_prevState: any, params: FormData) {
  const session = await getServerSession(authOptions);

  const validation = schema.safeParse({
    title: params.get("title"),
    content: params.get("content"),
  });

  if (validation.success) {
    const dt = {
      title: params.get("title") as string,
      content: params.get("content") as string,
      authorId: session?.user.id,
    };
    console.log(dt);

    const bee = await APIHandler({
      name: "PostsArticle",
      url: "/api/posts",
      method: "POST",
      headers: Object.fromEntries(headers()),
      data: dt,
      type: "form",
    });
    console.log(bee);

    redirect("/");
  } else {
    return {
      errors: validation.error.issues,
    };
  }
}
