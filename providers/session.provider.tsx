"use client";
import { Session } from "next-auth";
import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";

type SessionProps = {
  session: Session | null;
  children: React.ReactElement;
};

const SessionProvider = ({ session, children }: SessionProps) => (
  <NextAuthSessionProvider session={session}>
    {children}
  </NextAuthSessionProvider>
);

export default SessionProvider;
