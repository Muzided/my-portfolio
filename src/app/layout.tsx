import type { Metadata } from "next";
import { Geist, Geist_Mono ,Press_Start_2P} from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Global/NavBar";
import CustomCursor from "@/components/Global/CustomCursor";

const pressStart2P = Press_Start_2P({
  weight: "400",
  variable: "--font-press-start-2p",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pressStart2P.variable} antialiased`}
      >
        <NavBar/>
        {children}
        {/* <CustomCursor/> */}
      </body>
    </html>
  );
}
