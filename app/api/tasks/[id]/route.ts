import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(request: Request, 
    { params }: { params: Promise<{ id: string }> }
) {
    
  const { id } = await params; // pega o valor de [id]

  const body = await request.json();

  const updated = await prisma.task.update({
    where: { id: id },
    data: body,
  });

  return NextResponse.json(updated);
}
