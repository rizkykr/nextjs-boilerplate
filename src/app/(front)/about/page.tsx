"use client";
import { Calendar } from "primereact/calendar";
import { useState } from "react";

export default function Page() {
  const [state, setState] = useState<boolean>(false);
  return (
    <>
      <button onClick={() => setState(!state)}>aaaa</button>
      <p className={state ? "text-blue-900" : "text-red-700"}>
        Merubah Condition
      </p>
      <Calendar />;
    </>
  );
}
