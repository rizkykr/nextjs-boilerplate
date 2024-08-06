import { PrismaClient } from "@prisma/client";
import PageClient from "./page_client";
const prisma = new PrismaClient();

async function loadData() {
  return await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export default async function Page() {
  const dataPost = await loadData();
  return <PageClient data={dataPost} />;
}
