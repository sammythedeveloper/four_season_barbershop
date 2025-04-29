import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Four Season Barbershop",
  description: "Created with the help of Frontend Tribe",
  icons: {
    icon: "./fav.png", // or "/favicon.ico"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
