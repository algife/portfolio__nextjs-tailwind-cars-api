import Footer from "@/components/Footer";
import LoadingStatusBar from "@/components/LoadingStatusBar";
import Navbar from "@/components/Navbar";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import ReduxProvider from "@/providers/redux.provider";
import SessionProvider from "@/providers/session.provider";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "CarHub",
  description: "Drive the car of your dreams in the snap of a finger!",
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className="body">
        <SessionProvider session={session}>
          <ReduxProvider>
            <LoadingStatusBar />
            <Navbar session={session} />
            {children}
            <Footer />
          </ReduxProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
