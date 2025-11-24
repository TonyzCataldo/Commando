import LoginForm from "@/components/Forms/LoginForm/LoginForm";
import HomeHeader from "@/components/Headers/HomeHeader/HomeHeader";
import Paper from "@/components/Wrappers/Paper/Paper";
import { getAuthSession } from "@/lib/auth";

import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await getAuthSession();
  if (session) {
    redirect("/")
  }
  return (
    <div className="">
      <HomeHeader />
      <div className="pt-[120px]"></div>
      <main className="flex flex-col items-center justify-center px-4 py-6">
        <Paper className="md:p-8 w-full max-w-[525px]">
          <div className="text-center flex flex-col gap-2">
            <h1 className="text-3xl font-semibold text-gray-950">
              Log in to stay in command!
            </h1>
            <p className="text-lg font-medium text-gray-600">
              Let's boost your productivity.
            </p>
          </div>
          <LoginForm />
          <p className="text-lg font-medium text-gray-950">
            Haven't got an account?&nbsp;
            <Link className="text-primary-400 font-semibold" href={"/register"}>
              Create an account
            </Link>
          </p>
          <p className="text-secondary-500 text-center">* Please, after firts attempt wait some seconds and try again... the db is in sleep mode</p>
        </Paper>
      </main>
    </div>
  );
}
