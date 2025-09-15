"use client";

import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

const NAV_LINKS = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Features",
    href: "/features",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  return (
    <nav className="w-full h-20 flex items-center justify-between">
      {/* LOGO */}
      <div className="flex items-center gap-1">
        <Image src={"/logo.svg"} width={25} height={25} alt="logo" />
        <span className="font-bold font-heading">MEDORA</span>
      </div>

      {/* LINKS */}
      <div className="flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={"/"}
            className="font-medium text-sm text-gray-700 hover:text-black transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* BUTTONS SECTION */}
      <div className="flex items-center gap-3">
        <Link
          href={"/sign-in"}
          className={buttonVariants({ variant: "ghost" })}
        >
          Sign in
        </Link>
        <div className="h-8 w-px bg-gray-200" />
        <Link
          href={"/sign-up"}
          className={buttonVariants({ variant: "default" })}
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
