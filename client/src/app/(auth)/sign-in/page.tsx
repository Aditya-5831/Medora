import GoogleButton from "@/components/auth/GoogleButton";
import SignInForm from "@/components/auth/SignInForm";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="flex w-full max-w-sm flex-col items-center justify-center gap-5">
      <h1 className="text-center text-2xl font-bold text-pretty">
        Welcome back to Medora
      </h1>

      {/* GOOGLE BUTTON */}
      <GoogleButton />

      <div className="flex items-center gap-2 before:h-px before:w-36 before:max-w-40 before:bg-gray-100 after:h-px after:w-36 after:max-w-40 after:bg-gray-100">
        <span>or</span>
      </div>

      {/* SIGNUP FORM */}
      <SignInForm />

      <p className="text-sm text-gray-500">
        Don&apos;t have an account?{" "}
        <Link
          href={"/sign-up"}
          className="text-primary font-semibold underline"
        >
          Sign up
        </Link>
      </p>

      <p className="mt-5 text-center text-sm text-pretty text-gray-500">
        By signing in, you agree to our{" "}
        <Link href={"/terms"} className="text-primary font-semibold underline">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href={"/terms"} className="text-primary font-semibold underline">
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
};

export default SignInPage;
