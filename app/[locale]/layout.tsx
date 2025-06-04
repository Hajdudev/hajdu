import type { Metadata } from "next";
import {
  Bebas_Neue,
  Geist,
  Geist_Mono,
  Lustria,
  Notable,
  Rubik_Mono_One,
} from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import StoreProvider from "./store/StoreProvider";
import { NextIntlClientProvider } from "next-intl";

const notable = Notable({
  variable: "--font-notable",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const babasNeue = Bebas_Neue({
  variable: "--font-babas-neue",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lustria = Lustria({
  variable: "--font-lustria",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const rubicMono = Rubik_Mono_One({
  variable: "--font-rubic-mono-one",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Modern Web Agency ",
  description: "hajdu.dev we create modern 3d websites",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${notable.variable} ${geistSans.variable} ${babasNeue.variable} ${lustria.variable} ${rubicMono.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <StoreProvider>
            <Header />
            {children}
          </StoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
