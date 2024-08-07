"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Menubar } from "primereact/menubar";
import { Skeleton } from "primereact/skeleton";
import { useEffect, useState } from "react";
export default function Topbar() {
  const { data: session } = useSession();
  const { push: routeTo } = useRouter();
  const [isClient, setIsClient] = useState<boolean>(false);
  const [menu, setMenu] = useState<any[]>();
  useEffect(() => {
    setIsClient(true);
    if (session?.user.id)
      setMenu([
        {
          label: "Beranda",
          icon: "pi pi-home",
          command: () => {
            routeTo("/");
          },
        },
        {
          label: "Tambah",
          icon: "pi pi-plus",
          visible: session?.user.role == "admin",
          command: () => {
            routeTo("/add");
          },
        },
        {
          label: "Logout",
          icon: "pi pi-sign-out",
          command: () => {
            signOut();
          },
        },
      ]);
  }, [session]);
  return (
    <div className="md:mt-4 max-md:rounded-none mb-8">
      {!isClient && !session?.user.id ? (
        <Skeleton className="mb-2" height="2rem"></Skeleton>
      ) : (
        <Menubar model={menu} />
      )}
    </div>
  );
}
