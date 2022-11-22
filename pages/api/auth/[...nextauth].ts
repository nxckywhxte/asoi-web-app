import NextAuth, { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientSecret: process.env.GITHUB_SECRET!,
      clientId: process.env.GITHUB_ID!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
}
export default NextAuth(authOptions)
