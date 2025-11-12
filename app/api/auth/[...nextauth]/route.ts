import NextAuth, { type NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import { compare } from "bcryptjs";
import { loginSchema } from "@/lib/validation";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 0.5 * 24 * 60 * 60, // meio dia
    updateAge: 0.25 * 60 * 60, // 1/4 de hora
  },
  jwt: { maxAge: 0.5 * 24 * 60 * 60 },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: { email: {}, password: {} },
      async authorize(creds) {
        const parsed = loginSchema.safeParse(creds);
        if (!parsed.success) return null;
        const { email, password } = parsed.data;
        if (!email || !password) return null;

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user?.passwordHash) return null;

        const ok = await compare(password, user.passwordHash);
        if (!ok) return null;

        // retorne o mínimo necessário
        return { id: user.id, email: user.email, name: user.name ?? undefined };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = (user as any).id; // fixa o id no token após login
      return token;
    },
    async session({ session, token }) {
      if (session.user && token?.id) (session.user as any).id = token.id; // expõe id no session
      return session;
    },
  },
  pages: { signIn: "/login" }, // opcional: sua página de login
  secret: process.env.NEXTAUTH_SECRET, // garanta que está no .env
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
