// src/lib/auth.ts
import { getServerSession, NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { loginSchema } from "./validation";
import { prisma } from "./prisma";
import { compare } from "bcryptjs";

export function getAuthSession() {
  return getServerSession(authOptions);
}

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
        return {
          id: user.id,
          email: user.email,
          name: user.name ?? undefined,
          image: user.image ?? undefined,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.image = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token?.id) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.image;
      } // expõe id no session
      return session;
    },
  },
  pages: { signIn: "/login" }, // opcional: sua página de login
  secret: process.env.NEXTAUTH_SECRET, // garanta que está no .env
};
