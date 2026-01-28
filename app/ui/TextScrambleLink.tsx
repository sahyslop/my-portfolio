"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import TextScramble from "./TextScramble";

interface TextScrambleLinkProps {
  href: string;
  text: string;
  external?: boolean;
}

export default function TextScrambleLink({ href, text, external = false }: TextScrambleLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

  const linkClass = `text-foreground hover:text-accent transition-colors ${
    isActive ? "underline underline-offset-4 decoration-accent" : ""
  }`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        <TextScramble text={text} />
      </a>
    );
  }

  return (
    <Link href={href} className={linkClass}>
      <TextScramble text={text} />
    </Link>
  );
}
