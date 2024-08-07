import EditPage from "./page_client";
import { Post, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Props = {
  params: { id: string };
};

async function FetchDataPost(id: string) {
  return await prisma.post.findUnique({
    where: {
      id,
    },
  });
}

export default async function Page({ params }: Props) {
  const data = (await FetchDataPost(params.id)) as Post;
  return <EditPage data={data} />;
}
