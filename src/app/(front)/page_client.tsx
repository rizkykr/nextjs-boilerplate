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
import { Dialog } from "primereact/dialog";

export default function Home({
  data,
  hdr,
  cookie,
}: {
  data: any[];
  hdr: any;
  cookie: string;
}) {
  const rt = useRouter();
  const cm = useRef<any>(null);
  const { data: session } = useSession();
  const [globalFilterValue, setGlobalFilterValue] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<any>();

  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    title: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });
  async function postFakeData(ckie: string) {
    const dt = fakePostComplete();
    if (dt && session?.user) {
      const dataPost: any = {
        title: dt.title,
        content: dt.content,
        authorId: session?.user?.id,
      };
      var form_data = new FormData();
      for (var key in dataPost) {
        form_data.append(key, dataPost[key]);
      }
      const bee = await fetch(
        process.env.NEXT_PUBLIC_API_ENDPOINT + "/api/posts",
        {
          method: "POST",
          body: form_data,
          headers: {
            Cookie: ckie,
          },
        }
      );
      console.log(bee);

      // await APIHandler({
      //   name: "postFake",
      //   url: "/api/posts",
      //   method: "POST",
      //   data: dataPost,
      //   type: "form",
      //   headers: hdr,
      // })
      //   .then(() => {
      //     toast.success("sukses menambahkan data");
      //     rt.refresh();
      //   })
      //   .catch(() => {
      //     toast.error("gagal menambahkan data");
      //   });
    }
  }
  const doDeletes = async (post: Post, ckie: string) => {
    await APIHandler({
      name: "postFake",
      url: "api/posts",
      method: "DELETE",
      data: {
        id: post.id,
      },
      headers: {
        Cookie: ckie,
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
      accept: () => doDeletes(post, cookie),
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
      <div className="flex flex-row justify-between items-center py-2">
        <h2 className="text-title-lg">Post Managements</h2>
        {/* add new */}
        <div className="justify-end flex items-center gap-2">
          <Link
            href="/add"
            className="btn relative flex flex-row items-center justify-center gap-x-2 py-2 px-4 rounded-[6.25rem] hover:shadow-md text-sm tracking-[.00714em] font-medium bg-primary-600 text-white dark:bg-primary-200 dark:text-primary-800"
          >
            <span className="material-symbols-outlined">add</span>
            Tambah Data
          </Link>
          <button
            onClick={() => {
              postFakeData(cookie);
              console.log(fakePostComplete());
            }}
            className="btn-tonal relative inline-flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] font-medium hover:shadow bg-secondary-100 text-primary-900 dark:bg-secondary-700 dark:text-secondary-100"
          >
            <span className="material-symbols-outlined">add</span>
            Fake
          </button>
        </div>
      </div>
      <div className="flex flex-col p-4 overflow-hidden gap-4 rounded-xl bg-white dark:bg-gray-900">
        <DataTable
          size="small"
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
      </div>
      <ContextMenu
        model={menuModel}
        ref={cm}
        onHide={() => setSelectedProduct(null)}
      />
      <ConfirmDialog />
      <Dialog
        header="Header"
        visible={selectedProduct != null}
        style={{ width: "50vw" }}
        onHide={() => setSelectedProduct(null)}
      >
        <p className="m-0">
          <pre>{JSON.stringify(selectedProduct, undefined, 2)}</pre>
        </p>
      </Dialog>
    </>
  );
}
