import { AuthInputProps } from "./AuthInputTypes";

const AuthInput = ({
  label,
  error,
  placeholder,
  type,
  ...rest
}: AuthInputProps) => {
  return (
    <div className="flex flex-col w-full gap-2">
      <label htmlFor={label} className="text-gray-950 text-lg">
        {label.charAt(0).toUpperCase() + label.slice(1)}
      </label>
      <input
        {...rest}
        id={label}
        type={type}
        placeholder={placeholder}
        className={`p-2 w-full border rounded-md border-gray-600 outline-primary-500 ${
          error ? "border-secondary-500 outline-secondary-500" : ""
        }`}
      />
      {error && <p className="text-secondary-500 font-semibold">{error}</p>}
    </div>
  );
};

export default AuthInput;
