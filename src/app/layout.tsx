import type { Metadata, Viewport } from "next";

import "./globals.css";
import "../assests/style/main.css";
import { MessageSquare } from "lucide-react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const metadata: Metadata = {
  title: "Autoprosper",
  description:
    "With a fleet of reliable vehicles and skilled mechanics spanning the nation, autoprosper has dominated the automotive industry for over two decades with its unparalleled service and commitment to excellence in car maintenance and repair.",
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
        <ToastContainer/>
        {/* Navbar */}
        {children}
        {/* footer */}
        <div className="fixed bottom-[18px] right-[18px] md:bottom-[30px] md:right-[30px] z-50 w-[46px] h-[46px] md:w-[56px] md:h-[56px]">
          <button className="bg-primary hover:scale-110 transition-all text-white font-bold p-[14px] rounded-full shadow-lg w-full h-full">
            <MessageSquare
              fill="#fff"
              className="mx-auto w-[14.29px] h-[12.86px] md:w-[20px] md:h-[18px]"
            />
          </button>
        </div>
      </body>
    </html>
  );
}
