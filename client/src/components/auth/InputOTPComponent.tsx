"use client";

import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import Image from "next/image";
import Link from "next/link";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { useAuthStore } from "@/stores/useAuthStore";
import { Button } from "../ui/button";

const InputOTPComponent = () => {
  const { setShowPasswordInput } = useAuthStore((state) => state);

  return (
    <div className="mt-16 mb-20 flex flex-col items-center justify-center gap-5">
      <Image src={"/logo.svg"} width={40} height={40} alt="logo" />
      <h2 className="text-2xl font-bold text-neutral-800">Check your email</h2>
      <p className="text-center text-base text-neutral-900">
        We’ve sent you a passcode. <br /> Please check your inbox at
        a*****@g****.com.
      </p>

      <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
        <InputOTPGroup>
          <InputOTPSlot
            index={0}
            className="m-2 h-20 w-16 rounded-md border border-gray-300 text-lg"
          />
          <InputOTPSlot
            index={1}
            className="m-2 h-20 w-16 rounded-md border border-gray-300 text-lg"
          />
          <InputOTPSlot
            index={2}
            className="m-2 h-20 w-16 rounded-md border border-gray-300 text-lg"
          />
          <InputOTPSlot
            index={3}
            className="m-2 h-20 w-16 rounded-md border border-gray-300 text-lg"
          />
          <InputOTPSlot
            index={4}
            className="m-2 h-20 w-16 rounded-md border border-gray-300 text-lg"
          />
          <InputOTPSlot
            index={5}
            className="m-2 h-20 w-16 rounded-md border border-gray-300 text-lg"
          />
        </InputOTPGroup>
      </InputOTP>

      <p className="text-muted-foreground cursor-pointer text-center text-xs underline">
        resend code
      </p>

      <div className="text-muted-foreground text-center text-xs">
        Do remember your password?{" "}
        <Link
          href={"/sign-in"}
          onClick={() => setShowPasswordInput(true)}
          className="hover:text-primary cursor-pointer underline"
        >
          {" "}
          Use password
        </Link>
      </div>
    </div>
  );
};

export default InputOTPComponent;
