"use server";
import { authOptions } from "@/function/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { z } from "zod";
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
    params.append("authorId", session?.user.id);
    const ck: string = headers().get("Cookie") || "";
    const bee = await fetch(
      process.env.NEXT_PUBLIC_API_ENDPOINT + "/api/posts",
      {
        method: "POST",
        body: params,
        headers: {
          Cookie: ck,
        },
      }
    );
    console.log(ck);

    redirect("/");
  } else {
    return {
      errors: validation.error.issues,
    };
  }
}
