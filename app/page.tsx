"use client";

import { useState } from "react";

export default function Home() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-background pb-24">
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8 text-foreground">Seth Hyslop</h1>

        {!expanded ? (
          <div className="space-y-4">
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>Senior at the University of Michigan studying Computer Science </li>
              <li>My interests lie in the field of cybersecurity, specifically analyst roles as well as engineering</li>
              <li>This semester I am part of Michigan's team in MITRE's eCTF competition, working to cryptographically secure a hypothetical chip foundry</li>
              <li>This past summer I interned as a Security Analyst at a mortgage company in Indiana</li>
              <li>I'm currently studying for my CompTIA CYSA+ and earned my Security+ last summer</li>
              <li>My interests outside of tech lie in ceramics, cooking, my physical health, hiking, electronic music, and movies </li>
            </ul>
          </div>
        ) : (
          <div className="space-y-4 text-foreground/80">
            <p>
              Hello! I&apos;m Seth Hyslop, a software engineer with a passion for
              building thoughtful, well-crafted digital experiences. I believe in
              the power of technology to solve real problems and create meaningful
              connections.
            </p>
            <p>
              My journey in tech has taken me through various domains, from web
              development to exploring new frameworks and tools. I&apos;m always eager
              to learn and grow, whether that&apos;s diving into a new programming
              language or understanding the nuances of user experience design.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring creative projects,
              reading about technology trends, or working on side projects that
              push me outside my comfort zone.
            </p>
            <p>
              Feel free to explore my blog where I share thoughts and learnings,
              or reach out if you&apos;d like to connect. I&apos;m always open to
              interesting conversations and collaborations.
            </p>
          </div>
        )}

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-8 px-4 py-2 text-sm font-mono border border-accent text-accent hover:bg-accent hover:text-background transition-colors rounded"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      </main>
    </div>
  );
}
