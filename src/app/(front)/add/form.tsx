"use client";
import Link from "next/link";
import { Button } from "primereact/button";
import { Editor } from "primereact/editor";
import { InputText } from "primereact/inputtext";
import { useState } from "react";

import { useFormState } from "react-dom";
import type { ZodIssue } from "zod";
type Props = {
  action: (
    _prevState: any,
    params: FormData
  ) => Promise<{ errors: ZodIssue[] }>;
};

const ErrorMessages = ({ errors }: { errors: string[] }) => {
  if (errors.length === 0) return null;
  return errors.join(", ");
};

const findErrors = (fieldName: string, errors: ZodIssue[]) => {
  return errors
    .filter((item) => {
      return item.path.includes(fieldName);
    })
    .map((item) => item.message);
};

export default function Form({ action }: Props) {
  const [text, setText] = useState("");
  const [state, formAction] = useFormState(action, { errors: [] });

  const titleErrors = findErrors("title", state.errors);
  const contentErrors = findErrors("content", state.errors);
  return (
    <>
      <form action={formAction}>
        <div className="flex flex-row justify-between items-center py-2">
          <h2 className="text-title-lg">Add Posts</h2>
          {/* add new */}
          <div className="justify-end flex items-center gap-2">
            <button
              type="submit"
              className="btn relative flex flex-row items-center justify-center gap-x-2 py-2 px-4 rounded-[6.25rem] hover:shadow-md text-sm tracking-[.00714em] font-medium bg-primary-600 text-white dark:bg-primary-200 dark:text-primary-800"
            >
              <span className="material-symbols-outlined">add</span>
              Simpan
            </button>
            <Link
              href="/"
              className="btn-tonal relative inline-flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] font-medium hover:shadow bg-secondary-100 text-primary-900 dark:bg-secondary-700 dark:text-secondary-100"
            >
              Cancel
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="titlepost">Title Post</label>
            <InputText
              id="titlepost"
              aria-describedby="titlepost-help"
              name="title"
            />
            {ErrorMessages({ errors: titleErrors }) != null ? (
              <small id="titlepost-help" className="text-red-600">
                {ErrorMessages({ errors: titleErrors })}
              </small>
            ) : (
              ""
            )}
          </div>
          <InputText value={text} type="hidden" name="content" />
          <div className="flex flex-col gap-2">
            <label htmlFor="contentpost">Content Post</label>
            <Editor
              style={{ height: "320px" }}
              id="contentpost"
              aria-describedby="content-help"
              value={text}
              onTextChange={(e) => setText(e.htmlValue || "")}
            />
            {ErrorMessages({ errors: contentErrors }) != null ? (
              <small id="content-help" className="text-red-600">
                {ErrorMessages({ errors: contentErrors })}
              </small>
            ) : (
              ""
            )}
          </div>
        </div>
      </form>
    </>
  );
}
