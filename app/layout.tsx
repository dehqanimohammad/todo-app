import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const inter = Vazirmatn({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "todo app",
  description: "todoapp using nextjs and redux with local storage management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
