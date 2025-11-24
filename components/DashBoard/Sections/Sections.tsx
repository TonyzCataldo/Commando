import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { getSectionsParameters } from "./SectionsTypes";
import SectionsUI from "./SectionsUI";

const Section = async ({date}: getSectionsParameters) => {
     const session = await getServerSession(authOptions);

      const start = new Date(date);
  start.setUTCHours(0, 0, 0, 0);

  const end = new Date(date);
  end.setUTCHours(23, 59, 59, 999);
    
      if (!session?.user?.id) {
        redirect("/login");
      }

       const sections = await prisma.section.findMany({
          where: {
            userId: session.user.id,
            createdAt: {
              gte: start,
              lte: end,
            },
          },
          orderBy: { createdAt: "desc" },
        });

        return <SectionsUI date={date} sections={sections} />
}
export default Section;