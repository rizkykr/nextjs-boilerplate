"use client";
import { signOut, useSession } from "next-auth/react";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Link from "next/link";
import { fakePostComplete, fakeUserComplete } from "../../types/fake-data";
import toast from "react-hot-toast";
import { APIHandler } from "@/function/api";
import { useRouter } from "next/navigation";
import { Post } from "@prisma/client";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";

export default function Home({ data }: { data: any[] }) {
  const rt = useRouter();
  const { data: session } = useSession();
  async function postFakeData() {
    const dt = fakePostComplete();
    if (dt && session?.user) {
      const dataPost = {
        title: dt.title,
        content: dt.content,
        authorId: session?.user?.id,
      };
      await APIHandler({
        name: "postFake",
        url: "api/posts",
        method: "POST",
        data: dataPost,
        type: "form",
      })
        .then(() => {
          toast.success("sukses menambahkan data");
          rt.refresh();
        })
        .catch(() => {
          toast.error("gagal menambahkan data");
        });
    }
  }
  const doDeletes = async (post: Post) => {
    await APIHandler({
      name: "postFake",
      url: "api/posts",
      method: "DELETE",
      data: {
        id: post.id,
      },
      type: "form",
    })
      .then(() => {
        toast.success("sukses menghapus data");
        rt.refresh();
      })
      .catch(() => {
        toast.error("gagal menghapus data");
      });
  };

  const confirmDeletes = (post: Post) => {
    confirmDialog({
      message: "Do you want to delete this record?",
      header: "Delete Confirmation",
      icon: "pi pi-info-circle",
      defaultFocus: "reject",
      acceptClassName: "p-button-danger",
      accept: () => doDeletes(post),
    });
  };

  const actionTemplate = (post: Post) => {
    return (
      <>
        <Button
          icon="pi pi-pencil"
          rounded
          text
          severity="info"
          aria-label="Edit"
          size="small"
        />
        <Button
          icon="pi pi-times"
          rounded
          text
          severity="danger"
          aria-label="Delete"
          size="small"
          onClick={() => confirmDeletes(post)}
        />
      </>
    );
  };
  return (
    <>
      <h1 className="text-4xl mt-4">Post Managements</h1>
      <p>Silahkan manage post anda dibawah ini</p>
      <div className="flex gap-x-3 my-4 justify-end items-center">
        <Link href="/add">
          <Button label="Tambah" size="small" severity="success" />
        </Link>

        <Button
          label="Fake"
          size="small"
          onClick={() => {
            postFakeData();
            console.log(fakePostComplete());
          }}
        />
        <Button
          label="Keluar"
          size="small"
          severity="danger"
          onClick={() => signOut()}
        />
        <Button
          label="User Gen"
          size="small"
          severity="secondary"
          onClick={() => console.log(fakeUserComplete())}
        />
      </div>
      <DataTable
        showGridlines
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        value={data}
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column field="id" header="ID"></Column>
        <Column field="title" header="Title"></Column>
        <Column field="content" header="Content"></Column>
        <Column header="Action" body={actionTemplate}></Column>
      </DataTable>
      <ConfirmDialog />
    </>
  );
}
