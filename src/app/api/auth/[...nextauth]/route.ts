import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/auth/signin", // Página de login personalizada, se você tiver
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    /* async signIn({ user, account, profile, email, credentials }) {
      console.log("SignIn", user, account, profile, email, credentials);
      return true;
    },
    async session({ session, token, user }) {
      console.log("Session", session, token, user);
      return session;
    },
    async jwt({ token, user, account }) {
      console.log("JWT", token, user, account);
      return token;
    }, */
  }
});

export { handler as GET, handler as POST };
