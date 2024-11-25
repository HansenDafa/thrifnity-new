import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"bg-custom-white text-black font-inter"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
