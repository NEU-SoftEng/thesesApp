"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/resources", label: "Resources" },
  { href: "/help", label: "Help" },
  { href: "/about", label: "About" },
];

export const NavigationLinks = () => {
  const pathname = usePathname();

  return links.map(({ href, label }) => (
    <Link
      key={href}
      href={href}
      className={`text-xl font-medium transition-colors ${pathname === href ? "text-primary" : "text-foreground"}`}
    >
      {label}
    </Link>
  ));
};
