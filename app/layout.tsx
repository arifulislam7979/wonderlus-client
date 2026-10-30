import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";


const josefinSans = Josefin_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wanderlust",
  description: "Discover your next adventure with curated travel experiences.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${josefinSans.className} h-full antialiased`}>
      
        <body className="min-h-full flex flex-col">
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
         <Toaster position="top-center" richColors />
        </body>
      
    </html>
  );
}
