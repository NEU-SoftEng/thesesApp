import { PrismaAdapter } from "@auth/prisma-adapter";
import {
  type DefaultSession,
  type NextAuthOptions,
  getServerSession,
} from "next-auth";
import type { Adapter } from "next-auth/adapters";
import Google from "next-auth/providers/google";
import { db } from "./db";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

export const authConfig: NextAuthOptions = {
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    // Add more provider here
    // Example: https://authjs.dev/getting-started/providers/google
    Google({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
    }),
  ],
};

export const getServerAuthSession = () => getServerSession(authConfig);
