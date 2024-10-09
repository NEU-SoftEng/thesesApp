"use client"; // Mark this component as a Client Component

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; // Use next/navigation instead of next/router
import { useEffect } from "react";

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/app/page"); // Redirect to main page if logged in
    }
  }, [session, router]);

  if (session) return null; // Don't show the login if already logged in

  return (
    <h1></h1>
  );
}
