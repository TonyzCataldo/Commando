import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { avatarOptions } from "@/lib/validation";

export async function PATCH(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const body = await req.json();
  const { name, image } = body;

  if (image && !avatarOptions.includes(image)) {
    return NextResponse.json(
      { error: "Invalid avatar image." },
      { status: 400 }
    );
  }

  const updatedUser = await prisma.user.update({
    where: { id: session.user.id },
    data: {
      ...(name?.trim() ? { name } : {}),
      ...(image?.trim() ? { image } : {}),
    },
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
    },
  });

  return NextResponse.json(updatedUser);
}
