import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/Components/Home/Navbar/ResponsiveNav";
import Footer from "@/Components/Home/Footer/Footer";

const font = Space_Grotesk({
  weight:['300','400','500','600','700'],
  subsets:['latin']
})

export const metadata: Metadata = {
  title: "Modus E-Learning Platform",
  description: "E-Learning website using next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className= {font.className}>
        <ResponsiveNav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
