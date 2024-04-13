import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Copywrite from "@/components/copywrite";
import "./globals.css";
import Footer from "@/components/footer";
import CartProvider from "@/components/CartProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clothing",
  description: "Best Cloths ever",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <main className="px-8">
            {" "}
            {children}
            <Footer />
          </main>

          <Copywrite />
        </CartProvider>
      </body>
    </html>
  );
}
