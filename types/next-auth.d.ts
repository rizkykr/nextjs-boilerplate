import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  //   interface Session {
  //     user: {
  //       id: string;
  //     };
  //   }
  interface Session {
    user: {
      id: any;
      image: any;
      name: any;
      email: any;
    };
  }

  interface User {
    id: any;
    image: any;
    name: any;
    email: any;
  }
}
