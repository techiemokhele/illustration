import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";

//custom
import "./globals.css";
import { Room } from "./Room";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "600", "800"],
});

export const metadata: Metadata = {
  title: "Neo Mokhele | Illustrations Creator",
  description:
    "A minimalist illustration application using Fabric.js and Liveblocks for real-time collaboration",
  icons: {
    icon: "/icons/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.className} bg-primary-grey-200`}>
        <Room>{children}</Room>
      </body>
    </html>
  );
}
