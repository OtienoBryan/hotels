import Notification from "@/components/Notification";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import QueryProvider from "@/components/QueryProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import MyNavbar from "@/components/MyNavbar";
import BottomNavigation from "@/components/BottomNavigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maa Hotel & Suites",
  description: "Restaurant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <QueryProvider>
            <div className="flex flex-col min-h-screen"> {/* Added flex and min-h-screen */}
              {/* <Notification /> */}
              {/* <MyNavbar /> */}
              <Navbar/>
              <main className="flex-grow"> {/* This will allow the main content to grow */}
                {children}
              </main>
              <ToastContainer position="top-center" theme="dark" autoClose={3000} />
              <BottomNavigation/>
              <Footer />  
            </div>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}