import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Freelancer - Get your job done by us",
  description: "Freelancer for hire, Work with us, and get your job done!",
  keywords:
    "Freelance, Website, Job, Developer, Programming, Coding, Mobile, Application, Apps",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.aulancer.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={clsx(inter.className, "overflow-x-hidden")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
