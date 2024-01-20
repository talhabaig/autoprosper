import type { Metadata, Viewport } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import "../assests/style/main.css";
import { MessageSquare } from "lucide-react";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={``}>
        {/* Navbar */}
        {children}
        {/* footer */}
        <div className="fixed bottom-4 right-4 z-50">
          <button className="bg-primary hover:scale-110 transition-all text-white font-bold p-[14px] rounded-full shadow-lg">
            <MessageSquare fill="#fff" width="20" height="18" />
          </button>
        </div>
      </body>
    </html>
  );
}
