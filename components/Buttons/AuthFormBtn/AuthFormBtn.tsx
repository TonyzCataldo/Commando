import { AuthFormBtnProps } from "./AuthFormBtnTypes";

const AuthFormBtn = ({
  children,
  className,
  isSubmitting,
}: AuthFormBtnProps) => {
  return (
    <button
      disabled={isSubmitting}
      type="submit"
      className={`bg-secondary-500 hover:bg-secondary-600 active:scale-95 transition-all duration-100 ease-in-out shadow-md px-9 py-6 w-fit rounded-lg text-lg cursor-pointer font-semibold text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default AuthFormBtn;
