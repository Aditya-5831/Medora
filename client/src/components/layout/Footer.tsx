import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between">
        <div className="mb-6 flex flex-col gap-2 md:mb-0">
          <Link href={"/"} className="text-primary text-2xl font-bold">
            Medora
          </Link>
          <p className="text-sm text-gray-500">
            Simplifying healthcare for patients, clinics, and hospitals.
          </p>
        </div>

        <div className="mb-6 grid grid-cols-2 gap-6 text-sm text-gray-600 md:mb-0 md:grid-cols-4">
          <Link href={"/about"} className="hover:text-primary transition">
            About
          </Link>
          <Link href={"/about"} className="hover:text-primary transition">
            Contact
          </Link>
          <Link href={"/about"} className="hover:text-primary transition">
            Terms
          </Link>
          <Link href={"/about"} className="hover:text-primary transition">
            Privacy
          </Link>
        </div>

        <div className="flex gap-4">
          <Link href={"#"} aria-label="Facebook">
            <Facebook className="hover:text-primary size-5 text-gray-500 transition" />
          </Link>
          <Link href={"#"} aria-label="Twitter">
            <Twitter className="hover:text-primary size-5 text-gray-500 transition" />
          </Link>
          <Link href={"#"} aria-label="Instagram">
            <Instagram className="hover:text-primary size-5 text-gray-500 transition" />
          </Link>
          <Link href={"#"} aria-label="Linkedin">
            <Linkedin className="hover:text-primary size-5 text-gray-500 transition" />
          </Link>
        </div>
      </div>

      <div className="py-4 text-center text-sm text-gray-500">
        @{new Date().getFullYear()} Medora. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
