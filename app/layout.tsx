import type { Metadata } from "next";
import { inconsolata } from "@/app/ui/fonts";
import Footer from "@/app/ui/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seth Hyslop",
  description: "Personal portfolio and blog of Seth Hyslop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inconsolata.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
