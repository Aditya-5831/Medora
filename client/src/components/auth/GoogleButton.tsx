import React from "react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";

const GoogleButton = () => {
  return (
    <Button variant={"outline"} size={"lg"} className="w-full">
      <FcGoogle className="size-5" />
      Continue with Google
    </Button>
  );
};

export default GoogleButton;
