import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header"; // Import the Header component
import Footer from "@/components/footer"; // Import the Footer component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pelitupa",
  description: "Pelitupa on peliyhteisö, joka tarjoaa palvelimia ja tapahtumia pelaajille. Peliseuraa vuodesta 2020 asti.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
