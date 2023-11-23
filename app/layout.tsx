import Header from "@/components/Header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CarX Finder",
  description: "Drive the car of your dreams in the snap of a finger!",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className="body">
        <Header />
        {children}
      </body>
    </html>
  );
}
