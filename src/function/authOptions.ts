import { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { includes } from "lodash";
import { cookies, headers } from "next/headers";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/login",
    error: "/auth/login",
  },
  events: {
    async signOut(message) {
      cookies().delete("rememberMe");
    },
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "admin@google.com",
        },
        password: { label: "Password", type: "password" },
        remember: { type: "checkbox" },
      },
      async authorize(credentials, req) {
        return await prisma.user
          .findUnique({
            where: {
              email: credentials?.email,
              password: credentials?.password,
            },
          })
          .then((v: any) => {
            if (v == null) throw new Error("User atau Password Salah");
            return {
              ...v,
              image:
                "https://api.dicebear.com/9.x/adventurer/png?seed=" + v.name,
            };
          })
          .catch((err) => {
            console.log(err);
            throw new Error(err);
          });
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.image;
        session.user.role = token.role;
      }
      return session;
    },
    jwt: async ({ user, token, trigger, session }) => {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.image = user.image;
        token.role = user.role;
      }
      return token;
    },
  },
};
