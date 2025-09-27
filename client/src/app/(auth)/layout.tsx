import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto max-w-7xl">
      <Navbar />
      <div className="my-10 flex h-full w-full flex-col items-center px-5 sm:px-0">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default AuthLayout;
