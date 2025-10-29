import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "season ✂️ Clip",
  description: "Elite grooming experience",
  icons: {
    icon: "/barb.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <base href="/four_season_barbershop/" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
