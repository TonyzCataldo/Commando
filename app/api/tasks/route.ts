// app/api/tasks/route.ts
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions, getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { taskSchema } from "@/lib/validation";
import z from "zod";

const taskApiSchema = taskSchema.extend({
  sectionId: z.string().cuid(),
  // ou z.string().uuid() / z.string() normal, depende de como seu id é
});

export async function POST(req: Request) {
  // 1) Confere se o usuário está autenticado
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.id) {
    return new NextResponse("Not authenticated", { status: 401 });
  }

  // 2) Lê o body da requisição
  const body = await req.json();

  // 3) Valida com o Zod usando taskSchema
  const parsed = taskApiSchema.safeParse(body);

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

  // 4) Se chegou aqui, os dados estão válidos
  const { title, type, estimate, sectionId } = parsed.data;

  // 5) Cria a task no Prisma
  const task = await prisma.task.create({
    data: {
      title: title,
      type, // "PRATICE" | "DOIT"
      estimate, // número entre 0 e 1440
      time: 0, // começa em 0
      userId: session.user.id,
      ...(sectionId && { sectionId }),
    },
  });

  // 6) Retorna a task criada pro front
  return NextResponse.json(task, { status: 201 });
}

export async function GET(req: Request) {
  const session = await getAuthSession();
  if (!session || !session.user?.id) {
    return new NextResponse("Not authenticated", { status: 401 });
  }
  const { searchParams } = new URL(req.url);

  const initialDate = searchParams.get("initial");
  const endDate = searchParams.get("end");
  const userId = session.user.id;

  if (!initialDate || !endDate) {
    return new NextResponse("Missing date params", { status: 400 });
  }

  const start = new Date(initialDate);
  start.setUTCHours(0, 0, 0, 0);
  const end = new Date(endDate);
  end.setDate(end.getDate() + 1); // próximo dia
  end.setUTCHours(0, 0, 0, 0);

  const tasks = await prisma.task.findMany({
    where: {
      userId,
      createdAt: {
        gte: start,
        lt: end,
      },
    },
    include: {
      section: true, // traz o objeto Section junto
    },

    orderBy: {
      createdAt: "asc",
    },
  });

  return NextResponse.json(tasks);
}
