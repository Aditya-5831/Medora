import MockDashboardUI from "@/components/landing/MockDashboardUI";
import Navbar from "@/components/layout/Navbar";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="mx-auto max-w-7xl">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-background relative my-12">
        <div className="space-y-6 text-center">
          <h1 className="text-4xl font-semibold tracking-wide sm:text-[42px] sm:leading-[1.2]">
            Smarter Healthcare, Powered by Technology
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-sm">
            Book appointments, manage clinics, and connect with patients — all
            in one place. Whether you’re a hospital, private clinic, or patient,
            Medora makes healthcare simple.
          </p>
          <Link
            href={"/"}
            className={buttonVariants({ size: "xl", className: "group" })}
          >
            Get Started{" "}
            <ArrowRight className="size-4 transition-all duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* MOCK DASHBOARD UI */}
      <MockDashboardUI />
    </div>
  );
};

export default LandingPage;
// bg-[#051237]
