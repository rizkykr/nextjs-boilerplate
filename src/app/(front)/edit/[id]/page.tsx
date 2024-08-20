import { APIHandler } from "@/function/api";
import EditPage from "./page_client";
import { Post } from "@prisma/client";
import { headers } from "next/headers";

type Props = {
  params: { id: string };
};

async function loadData(hdr: any, id: string) {
  return APIHandler({
    name: "getPostsbyID",
    url: "/api/posts/" + id,
    headers: hdr,
  });
}

export default async function Page({ params }: Props) {
  const hdr = Object.fromEntries(headers());
  const data = (await loadData(hdr, params.id)).data as Post;

  // const data = (await FetchDataPost(params.id)) as Post;
  return <EditPage data={data} />;
}
