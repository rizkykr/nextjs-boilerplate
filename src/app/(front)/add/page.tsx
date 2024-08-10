import Form from "./form";
import PostAction from "./serverAction";

export default function Page() {
  return <Form action={PostAction}></Form>;
}
