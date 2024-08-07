"use client";
import { signOut, useSession } from "next-auth/react";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Link from "next/link";
import { fakePostComplete, fakeUserComplete } from "../../../types/fake-data";
import toast from "react-hot-toast";
import { APIHandler } from "@/function/api";
import { useRouter } from "next/navigation";
import { Post } from "@prisma/client";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { useEffect, useRef, useState } from "react";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { ContextMenu } from "primereact/contextmenu";

export default function Home({ data }: { data: any[] }) {
  const rt = useRouter();
  const cm = useRef<any>(null);
  const { data: session } = useSession();
  const [globalFilterValue, setGlobalFilterValue] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<any>();

  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    title: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });
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
        setSelectedProduct("");
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
          onClick={() => rt.push(`/edit/${post.id}`)}
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
  const urlPostToTemplate = (post: Post) => {
    return <Link href={"/article/" + post.id}>{post.id}</Link>;
  };
  const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let _filters = { ...filters };

    // @ts-ignore
    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };
  const renderHeader = () => {
    return (
      <div className="flex justify-end">
        <IconField iconPosition="left">
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Pencarian"
            className="p-inputtext-sm"
          />
        </IconField>
      </div>
    );
  };
  const header = renderHeader();

  //Handle Delete Button
  useEffect(() => {
    if (!selectedProduct?.id) return;
    function handleKeyDown(e: any) {
      if (e.keyCode == 46 && selectedProduct?.id)
        confirmDeletes(selectedProduct);
    }
    document.addEventListener("keydown", handleKeyDown);
    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProduct]);

  const menuModel = [
    {
      label: "Edit",
      icon: "pi pi-fw pi-pencil",
      command: () => rt.push(`/edit/${selectedProduct.id}`),
    },
    {
      label: "Delete",
      icon: "pi pi-fw pi-times",
      command: () => confirmDeletes(selectedProduct),
    },
  ];
  return (
    <>
      <div className="titledetail max-md:px-4">
        <h1 className="md:text-4xl text-2xl mt-4">Post Managements</h1>
        <p className="max-sm:text-sm">Silahkan manage post anda dibawah ini</p>
      </div>
      <div className="flex gap-x-3 my-4 justify-end items-center hidden">
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
      {/* <pre>{JSON.stringify(selectedProduct, undefined, 2)}</pre> */}
      <DataTable
        size="small"
        className="mt-10"
        showGridlines
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        value={data}
        tableStyle={{ minWidth: "50rem" }}
        sortMode="multiple"
        removableSort
        dataKey="id"
        filters={filters}
        filterDisplay="row"
        header={header}
        globalFilterFields={["id", "title", "content"]}
        emptyMessage="Artikel tidak ditemukan."
        selectionMode="single"
        selection={selectedProduct}
        onSelectionChange={(e) => setSelectedProduct(e.value)}
        onContextMenu={(e) => cm.current.show(e.originalEvent)}
        contextMenuSelection={selectedProduct}
        onContextMenuSelectionChange={(e) => setSelectedProduct(e.value)}
        pageLinkSize={3}
      >
        <Column
          body={urlPostToTemplate}
          filter
          filterPlaceholder="Cari ID"
          sortable
          header="ID"
        ></Column>
        <Column
          field="title"
          filter
          filterPlaceholder="Cari Judul"
          sortable
          header="Title"
        ></Column>
        <Column
          field="content"
          filter
          filterPlaceholder="Cari Content"
          sortable
          header="Content"
        ></Column>
        <Column header="Action" body={actionTemplate}></Column>
      </DataTable>
      <ContextMenu
        model={menuModel}
        ref={cm}
        onHide={() => setSelectedProduct(null)}
      />
      <ConfirmDialog />
    </>
  );
}
