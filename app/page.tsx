"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h1 className="text-6xl md:text-8xl font-bold text-foreground leading-tight">
              Seth Hyslop
            </h1>
            <p className="text-xl md:text-2xl text-foreground/60 mt-6">
             University of Michigan
            </p>
          </div>
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-foreground/10 overflow-hidden flex-shrink-0">
            {/* Replace src with your profile picture path, e.g., "/profile.jpg" */}
            <Image
              src="/profile.jpg"
              alt="Seth Hyslop"
              width={192}
              height={192}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold text-foreground mb-8">About</h2>
        <div className="space-y-6 text-foreground/80 text-lg leading-relaxed">
          <p>
            I&apos;m a senior at the University of Michigan studying Computer Science.
            My interests lie in the field of cybersecurity, specifically analyst roles
            as well as security engineering.
          </p>
          <p>
            On campus, I&apos;m a member of{" "}
            <a href="https://zetapi.tech" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Zeta Pi
            </a>{" "}
            and{" "}
            <a href="https://wolvsec.org" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              WolvSec
            </a>
            . This semester I&apos;m part of Michigan&apos;s team in{" "}
            <a href="https://rules.ectf.mitre.org/2026/index.html" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              MITRE&apos;s eCTF
            </a>{" "}
            competition, working to cryptographically secure a hypothetical chip foundry.
          </p>
          <p>
            This past summer I interned as a Security Analyst at Ruoff Mortgage in Indiana.
            I&apos;m currently studying for my{" "}
            <a href="https://www.comptia.org/en-us/certifications/cybersecurity-analyst/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              CompTIA CYSA+
            </a>{" "}
            and earned my{" "}
            <a href="https://www.comptia.org/en-us/certifications/security/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Security+
            </a>{" "}
            last summer.
          </p>
        </div>
      </section>

      

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold text-foreground mb-8">Projects</h2>
        <div className="grid gap-12">
          {/* Project 1 */}
          <div className="group">
            <div className="flex flex-wrap items-baseline gap-4 mb-3">
              <span className="text-foreground/40 font-mono text-sm">01</span>
              <h3 className="text-xl font-semibold text-foreground">MITRE eCTF 2026</h3>
              <span className="text-xs px-2 py-1 bg-foreground/10 rounded text-foreground/60">In Progress</span>
            </div>
            <div className="ml-8">
              <p className="text-foreground/70 leading-relaxed mb-4">
                Working with Michigan&apos;s team to design and implement cryptographic security
                measures for a hypothetical chip foundry as part of MITRE&apos;s embedded
                capture-the-flag competition.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded">C</span>
                <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded">Python</span>
                <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded">Cryptography</span>
                <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded">Embedded Systems</span>
                <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded">Secure Programming</span>
              </div>
             {/* <div className="flex gap-4">
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">
                  GitHub →
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">
                  Blog Post →
                </a>
              </div> */}
            </div>
          </div>

          {/* Project 2 */}
          <div className="group">
            <div className="flex flex-wrap items-baseline gap-4 mb-3">
              <span className="text-foreground/40 font-mono text-sm">02</span>
              <h3 className="text-xl font-semibold text-foreground">Personal Homelab</h3>
            </div>
            <div className="ml-8">
              <p className="text-foreground/70 leading-relaxed mb-4">
                Built a home network infrastructure using a Raspberry Pi running Pi-hole for
                network-wide ad blocking and custom DNS/DHCP services. Configured WireGuard
                VPN for secure remote access, enabling encrypted connections to my home network
                and cross-platform access between devices for security research and development.
                I run a Windows workstation with VMware to manage multiple virtual machines for lab environments and testing.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded">Linux</span>
                <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded">Raspberry Pi</span>
                <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded">WireGuard VPN</span>
                <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded">DNS/DHCP</span>
                <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded">Networking</span>
              </div>
              {/* <div className="flex gap-4">
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">
                  GitHub →
                </a>
              </div> */}
            </div>
          </div>

          {/* Project 3 */}
          <div className="group">
            <div className="flex flex-wrap items-baseline gap-4 mb-3">
              <span className="text-foreground/40 font-mono text-sm">03</span>
              <h3 className="text-xl font-semibold text-foreground">Language-Learning App Backend</h3>
            </div>
            <div className="ml-8">
              <p className="text-foreground/70 leading-relaxed mb-4">
               I worked with a team to build a Flask + SQLAlchemy REST API backend for a Czech startup’s language-learning platform,
                connected to a hosted PostgreSQL database. The app helps students practice and improve language 
                skills through AI-powered conversation. I implemented core features for managing learning content 
                and user enrollment workflows. The system also tracks student progress and activity to support reporting 
                and insights. To improve reliability, I added system logging and database health-check endpoints.
                I also was the main communicator with the client, gathering requirements and providing updates on our progress.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded">Python</span>
                <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded">Flask</span>
                <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded">SQLAlchemy</span>
                <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded">PostgreSQL</span>
                <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded">Postman</span>
              </div>
              {/* <div className="flex gap-4">
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">
                  GitHub →
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold text-foreground mb-8">Beyond Tech</h2>
        <p className="text-foreground/80 text-lg leading-relaxed">
          Outside of tech, I enjoy ceramics, cooking, hiking, staying active,
          electronic music, and movies. Check out my <a
            href="https://letterboxd.com/sahyslop"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-accent hover:underline"
          >
            Letterboxd
          </a>
        </p>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-foreground/10">
        <h2 className="text-2xl font-semibold text-foreground mb-8">Get In Touch</h2>
        <div className="flex flex-wrap gap-8">
          <a
            href="mailto:sahyslop@umich.edu"
            className="text-lg text-accent hover:underline"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/seth-hyslop"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-accent hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/sahyslop"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-accent hover:underline"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Footer spacing */}
      <div className="pb-20" />
    </div>
  );
}
