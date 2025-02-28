import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins, Roboto, Outfit } from "next/font/google";
import { Navbar } from "@components/navbar";
import "./globals.css";

const roboto_init = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "700"],
  variable: "--font-roboto",
});
const outfit_init = Outfit({
  subsets: ["latin"],
  weight: ["100", "300", "700"],
  variable: "--font-outfit",
});
const poppins_init = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "700"],
  variable: "--font-poppins",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Cbtic",
  description:
    "Turn complex theories into simple, exciting discoveries—start your physics journey today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto_init.variable} ${outfit_init.variable} ${poppins_init.variable}  antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
