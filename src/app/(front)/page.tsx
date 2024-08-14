import { headers } from "next/headers";
import PageClient from "./page_client";
import { APIHandler } from "@/function/api";

async function loadData(hdr: any) {
  return APIHandler({
    name: "getPosts",
    url: "/api/posts",
    headers: hdr,
  });
}

export default async function Page() {
  const hdr = Object.fromEntries(headers());
  const dataPost: any = await loadData(hdr);
  return (
    <>
      <pre>{JSON.stringify(dataPost, undefined, 2)}</pre>
      <PageClient data={dataPost.data} hdr={hdr} />
    </>
  );
}
