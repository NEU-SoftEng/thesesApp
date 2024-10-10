"use client";

import { Library } from "lucide-react";
import { NavigationLinks } from "../home/NavigationLinks";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const NavigationBar = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if(session) {
    return (
      <div className="flex w-screen items-center justify-between border-t-[20px] border-[#0038AB] px-10 py-5">
        <div className="flex items-end gap-5">
          <Library size={80} />
          <div className="flex flex-col">
            <h1 className="text-6xl font-bold">the Nexus</h1>
            <h1 className="text-2xl font-medium">New Era University</h1>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <NavigationLinks />
          <div>
            <div>
              <button className="text-xl font-medium" onClick={() => signOut({callbackUrl: "/"})}>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if(!session) {
    return (
      <div className="flex w-screen items-center justify-between border-t-[20px] border-[#0038AB] px-10 py-5">
        <div className="flex items-end gap-5">
          <Library size={80} />
          <div className="flex flex-col">
            <h1 className="text-6xl font-bold">the Nexus</h1>
            <h1 className="text-2xl font-medium">New Era University</h1>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <NavigationLinks />
          <div>
            <div>
              <button className="text-xl font-medium" onClick={() => router.push("/login")}>Sign In</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
