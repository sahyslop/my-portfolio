"use client";

import TextScrambleLink from "./TextScrambleLink";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 p-6 bg-background">
      <nav className="max-w-3xl mx-auto flex justify-center gap-8 text-sm font-mono">
        <TextScrambleLink href="/" text="Home" />
        <TextScrambleLink href="/blog" text="Blog" />
        <TextScrambleLink href="/resume" text="Resume" />
      </nav>
    </footer>
  );
}
