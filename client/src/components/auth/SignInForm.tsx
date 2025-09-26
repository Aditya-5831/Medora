"use client";

import { apiRequest, setAccessToken } from "@/lib/apiRequest";
import { useAuthStore } from "@/stores/useAuthStore";
import {
  SignInFormSchema,
  SignInFormValues,
} from "@/validations/auth.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";

interface AuthErrorResponse {
  message: string;
}

const SignInForm = () => {
  const form = useForm<SignInFormValues>({
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { setUser } = useAuthStore((state) => state);

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: SignInFormValues) => {
      const response = (await apiRequest.post("/auth/sign-in", values)).data;

      if (response.success) {
        setAccessToken(response.accessToken);
        toast.success(response.message);
        setUser(response.safeUser);
      }
    },

    onSuccess: () => {
      form.reset();
    },

    onError: (error: AxiosError) => {
      if (error.response) {
        const errorResponse = error.response.data as AuthErrorResponse;

        if (errorResponse.message === "Invalid credentials") {
          toast.error("Invalid credentials");
        } else {
          toast.error("Something went wrong");
        }
      }
    },
  });

  const onSubmit = (values: SignInFormValues) => {
    mutate(values);
  };

  return (
    <div className="flex w-full flex-col gap-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    {...field}
                    placeholder="Jason@example.com"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    {...field}
                    placeholder="********"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button disabled={isPending} type="submit" className="w-full">
            {isPending ? (
              <Loader2 className="size-5 animate-spin" />
            ) : (
              "Sign in"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SignInForm;
