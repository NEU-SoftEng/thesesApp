"use client";

import { Footer } from "@/components/common/Footer";
import { NavigationBar } from "@/components/common/NavigationBar";
import { NewsUpdate } from "@/components/home/NewsUpdate";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <div>
        <Image
          src="/hero.png"
          alt="Hero image"
          className="h-auto w-screen"
          width={1000}
          height={1000}
          sizes="100vw"
        />

        <div className="w-screen bg-primary py-3">
          <h1 className="text-center text-2xl font-bold text-white">
            Guidelines for the Onsite Service of the Main Library
          </h1>
        </div>

        <div
          className="relative flex items-center justify-center py-12"
          style={{
            backgroundImage: "url(/search-bg.png)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <div className="absolute inset-0 bg-primary opacity-30" />

          <div className="relative flex gap-2">
            <input
              type="text"
              placeholder="Search for thesis and research books..."
              className="h-10 w-96 rounded-md border px-3 py-2 ring-offset-background placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Search for thesis and research books"
            />
            <button
              className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground ring-offset-background transition-colors hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Search button"
            >
              Search
            </button>
          </div>
        </div>

        <NewsUpdate />

        <Footer />
      </div>
    </>
  );
}
