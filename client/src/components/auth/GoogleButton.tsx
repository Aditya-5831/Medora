"use client";

import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";

const GoogleButton = () => {
  const handleGoogleAuth = () => {
    window.location.href = "http://localhost:5000/api/v1/auth/google";
  };

  return (
    <Button
      onClick={handleGoogleAuth}
      variant={"outline"}
      size={"lg"}
      className="w-full"
    >
      <FcGoogle className="size-5" />
      Continue with Google
    </Button>
  );
};

export default GoogleButton;
