"use client";
import { APIHandler } from "@/function/api";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import { Editor } from "primereact/editor";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Page() {
  const rt = useRouter();
  const { data: session } = useSession();
  const [titlePost, setTitlePost] = useState<string>("");
  const [contentPost, setContentPost] = useState<string>("");
  async function postData() {
    await APIHandler({
      url: "api/posts",
      method: "POST",
      data: {
        title: titlePost,
        content: contentPost,
        authorId: session?.user.id,
      },
      type: "form",
    })
      .then((v) => {
        toast.success("Sukses menyimpan data");
        rt.replace("/");
      })
      .catch((err) => {
        toast.error("Gagal menyimpan data, silahkan cek log");
        console.log(err);
      });
  }
  return (
    <>
      <div className="titledetail max-md:px-4">
        <h1 className="md:text-4xl text-2xl mt-4">Post Add</h1>
        <p className="max-sm:text-sm">Silahkan ketikan post anda dibawah ini</p>
        <div className="flex gap-x-3 my-4 justify-end items-center">
          <Button
            label="Simpan"
            size="small"
            severity="success"
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
