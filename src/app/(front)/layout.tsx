import Topbar from "@/components/topbar";

export default function HootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Topbar />
      {children}
    </>
  );
}
