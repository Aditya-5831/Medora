"use client";

import { cn } from "@/lib/utils";
import { DollarSign, Home, Info, Mail, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "../ui/button";

const NAV_LINKS = [
  {
    name: "Home",
    href: "/",
    icon: <Home className="size-5" />,
  },
  {
    name: "Features",
    href: "/features",
    icon: <Star className="size-5" />,
  },
  {
    name: "Pricing",
    href: "/pricing",
    icon: <DollarSign className="size-5" />,
  },
  {
    name: "About",
    href: "/about",
    icon: <Info className="size-5" />,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: <Mail className="size-5" />,
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full h-20 flex items-center justify-between px-6 md:px-12 shadow-sm">
      {/* LOGO */}
      <div className="flex items-center gap-1">
        <Image src={"/logo.svg"} width={25} height={25} alt="logo" />
        <span className="hidden sm:block font-bold font-heading">MEDORA</span>
      </div>

      {/* DESKTOP LINKS */}
      <div className="hidden sm:flex items-center gap-8">
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
      <div className="hidden md:flex items-center gap-3">
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

      {/* MOBILE MENU */}
      <div className="sm:hidden absolute bottom-5 left-0 flex items-center justify-around w-full border-t pt-5 rounded-t-xl">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn("py-2 text-gray-700 font-medium hover:text-black", {
              "text-primary": pathname === link.href,
            })}
          >
            <div className="flex flex-col items-center gap-1">
              {link.icon}
              <span className="text-xs">{link.name}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* MOBILE BUTTON SECTION */}
      <div className="sm:hidden items-center gap-3">
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
