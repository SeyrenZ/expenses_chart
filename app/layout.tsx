import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const DmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Expense Chart",
  description: "Created by Kaiser",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={DmSans.className}>{children}</body>
    </html>
  );
}
