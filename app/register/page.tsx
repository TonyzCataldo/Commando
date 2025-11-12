import RegisterForm from "@/components/Forms/RegisterForm/RegisterForm";
import HomeHeader from "@/components/Headers/HomeHeader/HomeHeader";
import Paper from "@/components/Wrappers/Paper/Paper";
import Link from "next/link";

export default function Register() {
  return (
    <div className="">
      <HomeHeader />
      <div className="pt-[120px]"></div>
      <main className="flex flex-col items-center justify-center px-4 py-6">
        <Paper className="md:p-8">
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
            Already got an account?
            <Link className="text-primary-400 font-semibold" href={"/login"}>
              Log in
            </Link>
          </p>
        </Paper>
      </main>
    </div>
  );
}
