"use client";
import { APIHandler } from "@/function/api";
import { Post } from "@prisma/client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import { Editor } from "primereact/editor";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Page({ data }: { data: Post }) {
  const rt = useRouter();
  const { data: session } = useSession();
  const [titlePost, setTitlePost] = useState<string>(data.title);
  const [contentPost, setContentPost] = useState<string>(
    data.content as string
  );
  async function postData() {
    await APIHandler({
      url: "api/posts",
      method: "PUT",
      data: {
        title: titlePost,
        content: contentPost,
        id: data.id,
      },
      type: "form",
    })
      .then((v) => {
        toast.success("Sukses mengupdate data");
        rt.replace("/");
      })
      .catch((err) => {
        toast.error("Gagal mengupdate data, silahkan cek log");
        console.log(err);
      });
  }
  return (
    <>
      {/* <pre>{JSON.stringify(data, undefined, 2)}</pre> */}
      <div className="titledetail max-md:px-4">
        <h1 className="md:text-4xl text-2xl mt-4">Post Edit</h1>
        <p className="max-sm:text-sm">Silahkan edit post anda dibawah ini</p>
        <div className="flex gap-x-3 my-4 justify-end items-center">
          <Button
            label="Update"
            size="small"
            severity="info"
            onClick={() => postData()}
          />

          <Link href="/">
            <Button label="Batal" size="small" severity="secondary" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-y-4">
        <InputText
          placeholder="Title Post"
          className="w-full"
          value={titlePost}
          onChange={(e) => setTitlePost(e.target.value)}
        />
        <Editor
          style={{ height: "320px" }}
          value={contentPost}
          onTextChange={(e) => setContentPost(e.htmlValue || "")}
        />
      </div>
    </>
  );
}
