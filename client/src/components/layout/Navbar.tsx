"use client";

import { cn } from "@/lib/utils";
import { ArrowRight, DollarSign, Home, Info, Mail, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "../ui/button";
import { useAuthStore } from "@/stores/useAuthStore";
import UserButton from "./UserButton";

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
  const { isAuthenticated, isLoadingUser } = useAuthStore((state) => state);

  return (
    <nav className="flex h-20 w-full items-center justify-between px-6 shadow-sm md:px-12">
      {/* LOGO */}
      <div className="flex items-center gap-1">
        <Image src={"/logo.svg"} width={25} height={25} alt="logo" />
        <span className="hidden font-bold sm:block">MEDORA</span>
      </div>

      {/* DESKTOP LINKS */}
      <div className="hidden items-center gap-8 sm:flex">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={"/"}
            className={cn(
              "hover:text-primary text-sm font-medium text-gray-700 transition-colors",
              {
                "text-primary font-bold": pathname === link.href,
              },
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* BUTTONS SECTION */}
      {isLoadingUser ? (
        <div />
      ) : isAuthenticated ? (
        <UserButton />
      ) : (
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={"/sign-up"}
            className={buttonVariants({
              size: "sm",
              className: "group text-xs",
            })}
          >
            Sign up
            <ArrowRight className="size-4 transition-all duration-200 group-hover:translate-x-1" />
          </Link>

          <div className="h-8 w-px bg-gray-200" />

          <Link
            href={"/sign-up"}
            className={buttonVariants({
              size: "sm",
              className: "text-xs",
              variant: "ghost",
            })}
          >
            Sign in
          </Link>
        </div>
      )}

      {/* MOBILE MENU */}
      <div className="absolute bottom-5 left-0 flex w-full items-center justify-around rounded-t-xl border-t pt-5 sm:hidden">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn("py-2 font-medium text-gray-700 hover:text-black", {
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
      <div className="items-center gap-3 sm:hidden">
        <Link
          href={"/sign-up"}
          className={buttonVariants({
            size: "sm",
            className: "group text-xs",
          })}
        >
          Sign up
          <ArrowRight className="size-4 transition-all duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
