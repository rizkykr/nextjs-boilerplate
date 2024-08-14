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
    <>
      <div className="relative">
        <h2 className="text-headline-md text-gray-900 dark:text-gray-100 mb-1">
          Welcome Back!
        </h2>
        <p className="text-body-lg mb-6">
          Continue with Google or Enter your detail
        </p>
        <button className="w-full btn-outline relative flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] font-medium border border-gray-500 text-primary-600 dark:border-gray-400 dark:text-primary-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            className="bi bi-google"
            viewBox="0 0 16 16"
          >
            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
          </svg>
          Log in with Google
        </button>
      </div>
      <div className="relative text-center">or</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          !logste && loginAction(e);
        }}
        className="relative flex flex-col gap-6"
      >
        {/* input email */}
        <div className="relative z-0">
          <input
            type="email"
            aria-label="inputemail"
            name="inputemail"
            id="inputemail"
            className="w-full h-12 block leading-5 relative py-2 px-4 rounded bg-neutral-10 dark:bg-neutral-900 border focus:border-2 border-gray-500 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:border-gray-400 dark:focus:border-primary-200 peer"
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              set_email(e.target.value)
            }
          />
          <label
            htmlFor="inputemail"
            className="absolute tracking-[.03125em] text-gray-500 dark:text-gray-400 bg-neutral-10 dark:bg-neutral-900 duration-300 transform px-1 -translate-y-6 scale-75 top-3 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:bg-neutral-10 dark:peer-focus:bg-neutral-900 peer-focus:px-1 peer-invalid:text-error-600 dark:peer-invalid:text-error-200"
          >
            Email
          </label>
        </div>
        {/* input password outlined */}
        <div className="relative z-0 [&.show_.off]:!block [&.show_.on]:!hidden">
          <input
            type="password"
            aria-label="inputpass"
            name="inputpass"
            id="inputpass"
            className="w-full h-12 block leading-5 relative py-2 px-4 rounded bg-neutral-10 dark:bg-neutral-900 border focus:border-2 border-gray-500 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:border-gray-400 dark:focus:border-primary-200 peer"
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              set_password(e.target.value)
            }
          />
          <label
            htmlFor="inputpass"
            className="absolute tracking-[.03125em] text-gray-500 dark:text-gray-400 bg-neutral-10 dark:bg-neutral-900 duration-300 transform px-1 -translate-y-6 scale-75 top-2.5 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:bg-neutral-10 dark:peer-focus:bg-neutral-900 peer-focus:px-1 peer-invalid:text-error-600 dark:peer-invalid:text-error-200"
          >
            Password
          </label>
          <div
            title="Show or hide password"
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
          >
            <span className="material-symbols-outlined on">visibility</span>
            <span className="material-symbols-outlined off !hidden">
              visibility_off
            </span>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          {/* checked */}
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              name="checked-demo"
              className="w-[18px] h-[18px] accent-primary-600 hover:accent-primary-600 dark:accent-primary-200 rounded-[2px]"
              checked={rmbrSt}
              onChange={onCheckRemember}
            />
            <span>Remember me</span>
          </label>
          <a
            href="forgot-password.html"
            className="underline hover:text-primary-600 dark:hover:text-primary-200"
          >
            Forgot password
          </a>
        </div>
        <button
          type="submit"
          className="btn relative inline-flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] hover:shadow-md text-sm tracking-[.00714em] font-medium bg-primary-600 text-white dark:bg-primary-200 dark:text-primary-800"
        >
          <span className="material-symbols-outlined">arrow_forward</span>
          Login
        </button>
        <p className="text-body-lg">
          Don't have an account?{" "}
          <a
            href="register.html"
            className="hover:text-primary-600 dark:hover:text-primary-200"
          >
            Signup now
          </a>
        </p>
      </form>
    </>
  );
}
