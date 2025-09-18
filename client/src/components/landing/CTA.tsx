import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="my-20">
      <div className="mx-auto max-w-3xl rounded-2xl bg-blue-600 px-8 py-16 text-center shadow-lg">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Ready to simplify healthcare?
        </h2>
        <p className="mt-4 text-blue-100">
          Join Medora today and experience seamless booking and management for
          patients, clinics, and hospitals.
        </p>
        <Link
          href={"/sign-up"}
          className="group mt-8 inline-flex cursor-pointer items-center gap-2 rounded-lg bg-white px-6 py-3 text-blue-600 shadow-md transition hover:bg-gray-100"
        >
          Get Started
          <ArrowRight className="size-5 transition duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default CTA;
