import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXTAUTH_CLIENTID!,
      clientSecret: process.env.NEXTAUTH_SECRET!,
    }),
  ],
};

export default NextAuth(authOptions);
