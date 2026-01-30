import type { Metadata } from "next";
import "./globals.css";
// Global Components
import Header from "@/components/header";
import Footer from "@/components/footer";
import UpBtn from "@/global/upBtn";

export const metadata: Metadata = {
  title: "Ahmed Adel | Software Engineer",
  description: "Nextjs Portfolio Website By Ahmed Adel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="container mx-auto my-6">
        <Header />
        {children}
        <UpBtn />
        <Footer />
      </body>
    </html>
  );
}
