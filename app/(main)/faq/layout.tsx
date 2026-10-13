import type { Metadata } from "next";

import { Article } from "@/components/article/article";
import { BackLink } from "@/components/back_link/back_link";

const description = "Answers to common questions about Paglyph, word capture, your library, offline access, iCloud sync, and subscriptions.";

export const metadata: Metadata = {
  title: "FAQ — Paglyph",
  description,
  alternates: { canonical: "/faq" },
  openGraph: { title: "FAQ — Paglyph", description, url: "/faq" },
  twitter: { title: "FAQ — Paglyph", description },
};

export default function FAQPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Article>
        <BackLink />
        {children}
      </Article>
    </main>
  );
}
