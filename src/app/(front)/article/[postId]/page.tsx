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
    <div className="py-8 px-6 flex flex-col gap-4 rounded-xl bg-white dark:bg-gray-900">
      <div className="relative text-base tracking-[0.5px] text-gray-600 dark:text-gray-400">
        <h1 className="text-display-sm md:text-display-md text-gray-800 dark:text-gray-200 mb-1">
          {getData.title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: getData.content || "" }}></div>
      </div>
    </div>
  );
}
