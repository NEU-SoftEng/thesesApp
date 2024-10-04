"use client";

import { SessionProvider } from "next-auth/react";
import { type ReactNode } from "react";

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: Readonly<AuthProviderProps>) => {
  return <SessionProvider>{children}</SessionProvider>;
};
