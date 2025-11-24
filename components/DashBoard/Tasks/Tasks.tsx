import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { TasksProps } from "./TasksTypes";
import TasksGrid from "../TasksGrid/TasksGrid";

export default async function TasksPage({ date, sectionId }: TasksProps) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    redirect("/login");
  }
  const start = new Date(date);
  start.setUTCHours(0, 0, 0, 0);

  const end = new Date(date);
  end.setUTCHours(23, 59, 59, 999);

  const tasks = await prisma.task.findMany({
    where: {
      userId: session.user.id,
      createdAt: {
        gte: start,
        lte: end,
      },
      sectionId: sectionId,
    },
    orderBy: { createdAt: "desc" },
  });

  return <TasksGrid tasks={tasks} />;
}
