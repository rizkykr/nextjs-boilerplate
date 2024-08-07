import { Post, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function FetchDataPost(id: string) {
  return await prisma.post.findUnique({
    where: {
      id,
    },
  });
}

type Props = {
  params: { postId: string };
};

export default async function DetailPost({ params }: Props) {
  const getData = (await FetchDataPost(params.postId)) as Post;
  console.log(getData);

  return (
    <article className="prose lg:prose-xl">
      <h1>{getData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: getData.content || "" }}></div>
    </article>
  );
}
