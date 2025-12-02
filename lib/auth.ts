// src/lib/auth.ts
import { getServerSession, NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { loginSchema } from "./validation";
import { prisma } from "./prisma";
import { compare } from "bcryptjs";
import type { User } from "next-auth";

export function getAuthSession() {
  return getServerSession(authOptions);
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 0.5 * 24 * 60 * 60,
    updateAge: 0.25 * 60 * 60,
  },
  jwt: { maxAge: 0.5 * 24 * 60 * 60 },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: { email: {}, password: {} },
      async authorize(creds): Promise<User | null> {
        const parsed = loginSchema.safeParse(creds);
        if (!parsed.success) return null;
        const { email, password } = parsed.data;
        if (!email || !password) return null;

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user?.passwordHash) return null;

        const ok = await compare(password, user.passwordHash);
        if (!ok) return null;

        const image = user.image ?? "/white-soldier.png";

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      // Toda vez que for montar a session, busca o user no DB pelo id do token
      if (!token?.id) return session;

      const dbUser = await prisma.user.findUnique({
        where: { id: token.id as string },
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
        },
      });

      if (dbUser && session.user) {
        session.user.id = dbUser.id;
        session.user.name = dbUser.name;
        session.user.email = dbUser.email;
        session.user.image = dbUser.image;
      }

      return session;
    },
  },
  pages: { signIn: "/login" },
  secret: process.env.NEXTAUTH_SECRET,
};
