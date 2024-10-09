"use client";

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session, router]);

  if (session) return null;

  return (
    <div className="relative flex min-h-screen items-center justify-center">
      <Image
        src="/hero.png"
        alt="Hero"
        layout="fill"
        objectFit="cover"
        className="absolute left-0 top-0 z-0"
      />
      <div className="absolute inset-0 z-10 bg-black opacity-10" />{" "}
      <div className="relative z-20 flex h-[350px] w-[700px] flex-col items-center justify-center rounded-lg bg-white p-12 shadow-lg">
        <Image
          src="/login.png"
          alt="Login illustration"
          width={300}
          height={300}
          className="mb-6"
        />
        <button
          className="flex items-center rounded-lg bg-[#0038AB] px-4 py-2 text-white transition hover:bg-blue-700"
          onClick={() => signIn("google")}
        >
          <Image
            src="/google-logo.png"
            alt="Google logo"
            width={24}
            height={24}
            className="mr-2"
          />
          Continue in with Google
        </button>
      </div>
    </div>
  );
}
