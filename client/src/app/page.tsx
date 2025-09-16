import MockDashboardUI from "@/components/landing/MockDashboardUI";
import Navbar from "@/components/layout/Navbar";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="my-10 relative bg-background">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-semibold tracking-wide sm:text-[42px] sm:leading-[1.2]">
            Smarter Healthcare, Powered by Technology
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground text-sm">
            Book appointments, manage clinics, and connect with patients — all
            in one place. Whether you’re a hospital, private clinic, or patient,
            Medora makes healthcare simple.
          </p>
          <Link
            href={"/"}
            className={buttonVariants({ size: "xl", className: "group" })}
          >
            Get Started{" "}
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-all duration-200" />
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
