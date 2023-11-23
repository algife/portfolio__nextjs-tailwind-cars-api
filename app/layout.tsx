import Footer from "@/components/Footer";
import ReduxProvider from "@/redux/redux.provider";
import type { Metadata } from "next";
import "./styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "CarHub",
  description: "Drive the car of your dreams in the snap of a finger!",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className="body">
        <ReduxProvider>
          <Navbar />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
