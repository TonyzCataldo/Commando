import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  // Esse é o User que vai circular nos callbacks (authorize, jwt, etc.)
  interface User {
    id: string;
    email: string;
    name: string | null;
    image: string; // 👈 sempre string
  }

  // Esse é o Session que você usa no front (getServerSession, useSession, etc.)
  interface Session {
    user: {
      id: string;
      email: string;
      name: string | null;
      image: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    email: string;
    name: string | null;
    image: string;
  }
}
