import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " flex min-h-screen flex-col bg-slate-200 text-slate-900 dark:bg-slate-800 dark:text-slate-200"
        }
      >
        <Navbar />
        {children}
        <Footer className="mt-auto" />
      </body>
    </html>
  );
}
