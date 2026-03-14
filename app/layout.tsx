import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhishek Prakash — Full-Stack Developer",
  description:
    "Full-Stack Developer focused on AI applications, real-time systems, and backend infrastructure.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
