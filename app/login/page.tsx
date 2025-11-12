import LoginForm from "@/components/Forms/LoginForm/LoginForm";
import HomeHeader from "@/components/Headers/HomeHeader/HomeHeader";
import Paper from "@/components/Wrappers/Paper/Paper";
import Link from "next/link";

export default function Login() {
  return (
    <div className="">
      <HomeHeader />
      <div className="pt-[120px]"></div>
      <main className="flex flex-col items-center justify-center px-4 py-6">
        <Paper className="md:p-8">
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
            Haven't got an account?
            <Link className="text-primary-400 font-semibold" href={"/register"}>
              Create an account
            </Link>
          </p>
        </Paper>
      </main>
    </div>
  );
}
