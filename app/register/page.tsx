import RegisterForm from "@/components/Forms/RegisterForm/RegisterForm";
import HomeHeader from "@/components/Headers/HomeHeader/HomeHeader";
import Paper from "@/components/Wrappers/Paper/Paper";
import { getAuthSession } from "@/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Register() {
  const session = await getAuthSession();
  if (session) {
    redirect("/");
  }
  return (
    <div className="">
      <HomeHeader />
      <div className="pt-[120px]"></div>
      <main className="flex flex-col items-center justify-center relative px-4 py-6 pb-28">
        <Paper className="md:p-8 w-full max-w-[525px]">
          <div className="text-center flex flex-col gap-2">
            <h1 className="text-3xl font-semibold text-gray-950">
              Create a account for free!
            </h1>
            <p className="text-lg font-medium text-gray-600">
              begin your journey with CommanDo.
            </p>
          </div>
          <RegisterForm />
          <p className="text-lg font-medium text-gray-950">
            Already got an account?&nbsp;
            <Link className="text-primary-400 font-semibold" href={"/login"}>
              Log in
            </Link>
          </p>
          <p className="text-secondary-500 text-center">
            * Please, after firts attempt wait some seconds and try again... the
            db is in sleep mode
          </p>
        </Paper>
      </main>
    </div>
  );
}
