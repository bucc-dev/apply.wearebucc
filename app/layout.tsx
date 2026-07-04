import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Join BUCC, Babcock University Computer Club",
    template: "%s | BUCC",
  },
  description:
    "Apply to join a committee at the Babcock University Computer Club. Explore open roles in Tech, Media, Academics, Sports, and more, and shape the future of BUCC.",
  metadataBase: new URL("https://apply.wearebucc.org"),
  openGraph: {
    type: "website",
    url: "https://apply.wearebucc.org ",
    title: "Join BUCC, Babcock University Computer Club",
    description:
      "Apply to join a committee at the Babcock University Computer Club. 2026 applications are now open.",
    siteName: "BUCC",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join BUCC, Babcock University Computer Club",
    description:
      "2026 BUCC committee applications are open. Find your committee and apply today.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
