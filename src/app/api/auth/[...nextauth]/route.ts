import { authConfig } from "@/server/auth";
import NextAuth from "next-auth";

export const runtime = 'edge';

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
