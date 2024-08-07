import { Post, PrismaClient } from "@prisma/client";
import PageClient from "./page_client";
import { cache } from "react";
const prisma = new PrismaClient();

export const loadData = cache(async () => {
  return await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
});

export default async function Page() {
  const dataPost: Post[] = await loadData();
  return <PageClient data={dataPost} />;
}
