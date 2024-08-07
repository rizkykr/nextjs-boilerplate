import Login from "./page_client";

export default async function Page({
  searchParams,
}: {
  searchParams: { callbackUrl: string; error: string };
}) {
  return (
    <Login
      cllbckUrl={searchParams.callbackUrl}
      errorData={searchParams.error}
    />
  );
}
