
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zenvia | Discover Your Dream Home",
  description:
    "Explore premium properties, discover homes and connect with trusted real estate agents.",
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
