// app/(auth)/dashboard/layout.tsx
import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/auth";
import DashHeader from "@/components/Headers/DashHeader/DashHeader";


export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAuthSession(); // lê e valida o JWT via cookie

  if (!session) {
    // se não estiver logado, manda pro login
    redirect("/login");
  }

  // aqui já tem session garantida
  return (
    <div className="flex">
      <DashHeader />
      {children}
    </div>
  );
}
