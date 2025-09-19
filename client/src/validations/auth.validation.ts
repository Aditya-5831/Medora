import z from "zod";

export const SignUpFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.email(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export type SignUpFormValues = z.infer<typeof SignUpFormSchema>;
