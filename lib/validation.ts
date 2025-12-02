import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(1, "Enter a name")
      .trim()
      .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, "The name cannot contain numbers"),
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

export const taskSchema = z.object({
  title: z.string().min(1, "Enter the task name"),
  type: z
    .enum(["PRATICE", "DOIT"], "Select a task type")
    .refine((val) => val !== undefined, {
      message: "Select a task type",
    }),
  estimate: z
    .number("Enter a valid minutes value")
    .int("enter a valid minutes value")
    .min(0, "Enter a valid minutes value")
    .max(1440, "Maximum allowed is 24 hours (1440 minutes)"),
});

export type TaskFormValues = z.infer<typeof taskSchema>;

export const sectionSchema = z.object({
  name: z.string().min(1, "Enter the section name"),
});

export type SectionFormValues = z.infer<typeof sectionSchema>;

export const avatarOptions = [
  "/white-soldier.png",
  "/black-soldier.png",
  "/asian-soldier.png",
  "/fox-white-soldier.png",
  "/fox-black-soldier.png",
  "/fox-asian-soldier.png",
] as const;

export const profileSchema = z.object({
  image: z.string().optional(),
  name: z
    .string()
    .trim()
    .optional()
    .refine((value) => !value || /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(value), {
      message: "The name cannot contain numbers",
    }),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;
