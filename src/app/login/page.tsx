"use client"; 

import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Login() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="flex h-10 items-center justify-center bg-[#0038AB] text-white"></div>

      <div className="relative flex flex-grow items-center justify-center">
        <Image
          src="/hero.png"
          alt="Hero"
          layout="fill" 
          objectFit="cover" 
          className="absolute left-0 top-0 z-0"
        />

        <div className="absolute inset-0 z-10 bg-black opacity-10" />

        <div className="relative z-20 flex h-[400px] w-[700px] flex-col items-center justify-center rounded-lg bg-white p-12">
          <Image
            src="/login.png"
            alt="Login illustration"
            width={300}
            height={300}
            className="mb-6"
          />

          <button
            className="flex items-center rounded-lg bg-[#0038AB] px-8 py-2 text-white transition hover:bg-blue-700"
            onClick={() => signIn("google", { callbackUrl: '/' })}
          >
            <Image
              src="/google-logo.png"
              alt="Google logo"
              width={24}
              height={24}
              className="mr-2"
            />
            Continue with Google
          </button>
        </div>
      </div>

      <div className="flex h-10 items-center justify-center bg-[#0038AB] text-white"></div>
    </div>
  );
}