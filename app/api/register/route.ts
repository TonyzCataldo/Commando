import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { registerSchema } from "@/lib/validation";

async function verifyTurnstile(token: string, ip?: string | null) {
  const form = new URLSearchParams();
  form.append("secret", process.env.TURNSTILE_SECRET_KEY!);
  form.append("response", token);
  if (ip) form.append("remoteip", ip);

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: form,
    }
  );

  return response.json() as Promise<{ success: boolean }>;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const token = body.__captchaToken as string | undefined;
    if (!token) {
      return NextResponse.json({ error: "Captcha required" }, { status: 400 });
    }
    const captcha = await verifyTurnstile(token);
    if (!captcha.success) {
      return NextResponse.json({ error: "Captcha failed" }, { status: 400 });
    }

    // 1) valida e normaliza (email já sai trim/lowercase se seu schema tiver transform)
    const parsed = registerSchema.safeParse(body);

    if (!parsed.success) {
      const message = parsed.error.issues[0]?.message ?? "Dados inválidos.";
      return NextResponse.json({ error: message }, { status: 422 }); // ou 400
    }

    const { name, email, password } = parsed.data;

    // 2) checa duplicidade
    const exists = await prisma.user.findUnique({ where: { email } });
    if (exists) {
      return NextResponse.json(
        { error: "E-mail já registrado." },
        { status: 409 }
      );
    }

    // 3) cria usuário
    const passwordHash = await hash(password, 12);
    const user = await prisma.user.create({
      data: { name: name || null, email, passwordHash },
      select: { id: true, email: true, name: true },
    });

    return NextResponse.json({ ok: true, user }, { status: 201 });
  } catch (err: any) {
    // trata unique por segurança (caso a checagem acima corra risco de race condition)
    if (err?.code === "P2002" && err?.meta?.target?.includes("email")) {
      return NextResponse.json(
        { error: "E-mail já registrado." },
        { status: 409 }
      );
    }
    console.error("Erro em /api/register:", err);
    return NextResponse.json(
      { error: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}
