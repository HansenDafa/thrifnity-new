import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import "./globals.css";

export const metadata = {
  title: "Thriftnity",
  description: "Platform terbaik untuk produk thrift",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={"bg-custom-white text-black font-inter"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}