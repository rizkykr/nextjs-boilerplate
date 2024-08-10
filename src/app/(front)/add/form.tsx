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
    <form action={formAction}>
      <div className="titledetail max-md:px-4">
        <h1 className="md:text-4xl text-2xl mt-4">Post Add</h1>
        <p className="max-sm:text-sm">Silahkan ketikan post anda dibawah ini</p>
        <div className="flex gap-x-3 my-4 justify-end items-center">
          <Button
            label="Simpan"
            size="small"
            type="submit"
            severity="success"
          />

          <Link href="/">
            <Button label="Batal" size="small" severity="secondary" />
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
  );
}
