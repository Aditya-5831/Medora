import z from "zod";

export const signInFormSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export const signUpFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.email(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export type SignInFormValues = z.infer<typeof signInFormSchema>;
export type SignUpFormValues = z.infer<typeof signUpFormSchema>;
