"use client";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Checkbox } from "primereact/checkbox";
import { capitalize, includes } from "lodash";
import destr from "destr";
export default function Page({
  cllbckUrl,
  errorData,
}: {
  cllbckUrl: string;
  errorData: string;
}) {
  let pathCallBack = "/";
  if (cllbckUrl && !includes(cllbckUrl, "/add")) {
    const url = new URL(cllbckUrl);
    pathCallBack = url.pathname;
  }

  const [logste, set_logste] = useState<boolean>(false);
  const [rmbrSt, setRmgrSt] = useState<boolean>(false);
  const [email, set_email] = useState<string>("");
  const [password, set_password] = useState<string>("");

  useEffect(() => {
    if (errorData) {
      const err: any = destr(errorData.replace("Error: ", ""));
      console.log(err);
      toast.error(capitalize(err));
    }
  }, [errorData]);

  async function loginAction(e: any) {
    set_logste(true);
    const ste: any = await signIn("credentials", {
      email,
      password,
      remember: rmbrSt,
      callbackUrl: pathCallBack,
    });
    console.log(ste);

    if (ste?.error) {
      set_logste(false);
      const err: any = destr(ste?.error.replace("Error: ", ""));
      toast.error(err);
    }
  }
  const onCheckRemember = (e: any) => {
    setRmgrSt(e.target.checked);
  };
  return (
    <div className="card w-full flex justify-center py-10">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          !logste && loginAction(e);
        }}
        className="w-full md:w-40 mx-auto flex flex-col align-center justify-center gap-3 py-5"
      >
        <div className="flex flex-wrap flex-col justify-center align-items-center gap-2">
          <label className="w-6rem">Username</label>
          <InputText
            id="username"
            type="email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              set_email(e.target.value)
            }
          />
        </div>
        <div className="flex flex-wrap flex-col justify-center align-center gap-2">
          <label className="w-6rem">Password</label>
          <InputText
            id="password"
            type="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              set_password(e.target.value)
            }
          />
        </div>
        <div className="flex align-center">
          <Checkbox
            inputId="ingredient1"
            checked={rmbrSt}
            onChange={onCheckRemember}
          />
          <label htmlFor="ingredient1" className="ml-2">
            Remember Me
          </label>
        </div>
        <Button label="Login" icon="pi pi-user" loading={logste}></Button>
      </form>
    </div>
  );
}
