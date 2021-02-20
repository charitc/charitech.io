import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],

  pages: {
  signIn: '/auth/signin',
  //signOut: '/auth/signout',
  //error: '/auth/error', // Error code passed in query string as ?error=
  //verifyRequest: '/auth/verify-request', // (used for check email message)
  // newUser: null // If set, new users will be directed here on first sign in
  }

  // A database is optional, but required to persist accounts in a database
  database: {
    type: "mongodb",
    useNewUrlParser: true,
    url: process.env.DATABASE_URL,
  },
});
