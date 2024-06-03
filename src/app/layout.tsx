import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400","700"]});
export const metadata: Metadata = {
  title: "Sui-Price",
  description: "Get the live Sui Price",
  icons:"/suipricelogo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} w-screen h-screen flex bg-gradient-to-r from-[#CDDBE1] to-[#75AABB]`}>
        {children}
      </body>
    </html>
  );
}
