import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { sectionSchema } from "@/lib/validation";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.id) {
      return new NextResponse("Not authenticated", { status: 401 });
    }

  const body = await req.json();

  const parsed = sectionSchema.safeParse(body);

  if (!parsed.success) {
    // Você pode formatar os erros pra mandar pro front
    const errors = parsed.error.flatten().fieldErrors;

    return NextResponse.json(
      {
        message: "Validation error",
        errors,
      },
      { status: 400 }
    );
  }

  const { name } = parsed.data;

  const section = await prisma.section.create({
    data: {
       name: name,
       userId: session.user.id, 
    }
  })

  return NextResponse.json(section, { status: 201 })

}