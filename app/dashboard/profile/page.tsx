import UserModal from "@/components/DashBoard/UserModal/UserModal";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
    },
  });

  return (
    <div className="flex items-center py-12 px-4 lg:px-6 flex-col gap-12 w-full mt-[67px] min-h-screen">
      <div className="flex flex-col gap-12 items-center">
        <div className="flex flex-col items-center justify-center gap-2 lg:flex-row lg:gap-6">
          <UserModal image={user!.image} />
          <div className="flex flex-col gap-2 items-center justify-center">
            <p className="text-4xl text-center">{user?.name}</p>
            <p className="text-center text-sm">{user?.email}</p>
          </div>
          <div className="flex items-center py-2 justify-center flex-col lg:pl-6">
            <Image
              src={"/rank-private.webp"}
              width={1000}
              height={950}
              alt="User rank"
              className="w-10 h-10"
            />
            <p className="text-center text-sm">Private</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-3xl">Coming soon</p>
          <ul className="flex flex-col items-center">
            <li>Ranks</li>
            <li>Achievements</li>
            <li>Armory</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
