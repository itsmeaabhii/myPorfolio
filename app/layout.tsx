import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Superdesign | AI Product Designer",
  description: "Clean, scalable design that helps you ship faster.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js" strategy="afterInteractive" />
      </head>
      <body className="antialiased min-h-screen selection-coral overflow-x-hidden bg-[#050505]">
        {children}
      </body>
    </html>
  );
}
