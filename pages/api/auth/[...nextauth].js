import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    ...(process.env.GOOGLE_CLIENT_ID
      ? [
          GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          }),
        ]
      : []),
    // Demo login: pick a display name, no password. Lets visitors try the app without a Google account.
    CredentialsProvider({
      id: 'demo',
      name: 'Demo Account',
      credentials: { name: { label: 'Display name', type: 'text' } },
      async authorize(credentials) {
        const name = (credentials?.name || '').trim().slice(0, 30) || 'Demo User';
        const slug = name.toLowerCase().replace(/[^a-z0-9]/g, '') || 'demouser';
        return {
          id: `demo-${slug}`,
          name,
          email: `${slug}@demo.mycodedojo.com`,
          image: `https://api.dicebear.com/7.x/thumbs/svg?seed=${slug}`,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session.user.name
        .split(' ')
        .join('')
        .toLocaleLowerCase();
      session.user.uid = token.sub;
      return session;
    },
  },
});
