import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "CommanDo",
  description: "Take command of your life",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${inter.variable} ${inter.className} relative bg-[radial-gradient(#046a3833_1px,transparent_1px)] 
              bg-[size:18px_18px]`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
