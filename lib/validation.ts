import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().trim().optional(),
    email: z
      .email("Invalid E-mail")
      .transform((val) => val.trim().toLowerCase()),
    password: z
      .string()
      .min(6, "Min 6 caracteres")
      .max(32, "Máx 32 caracteres"),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    path: ["confirm"],
    message: "Passwords don't match",
  });

export type RegisterInput = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.email("Invalid E-mail").transform((val) => val.trim().toLowerCase()),
  password: z.string().min(1, "Enter the password"),
});
export type LoginInput = z.infer<typeof loginSchema>;
