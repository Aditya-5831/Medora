import { Calendar, Shield, Stethoscope } from "lucide-react";
import React from "react";

const FEATURES = [
  {
    icon: Calendar,
    title: "Easy Booking",
    description: "Book appointments in just a few clicks, anytime, anywhere.",
  },
  {
    icon: Stethoscope,
    title: "Role-based Dashboards",
    description:
      "Separate dashboards for patients, private clinics, and hospitals.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Your health data is protected with enterprise-grade security.",
  },
];

const Features = () => {
  return (
    <section className="my-20">
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-2 text-center">
          <h5 className="text-primary text-lg/10">Features</h5>
          <h2 className="text-3xl font-medium text-neutral-800 sm:text-4xl">
            Everything you need in one platform
          </h2>
          <p className="text-sm text-gray-500">
            Medora makes healthcare management simple for patients, clinics, and
            hospitals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {FEATURES.map(({ title, icon: Icon, description }) => (
            <div
              key={title}
              className="flex max-w-[340px] flex-col gap-5 rounded-xl py-4 pr-9 pl-4 shadow-md ring-1 ring-gray-950/10"
            >
              <div className="border-primary/10 w-fit rounded-lg border p-3">
                <Icon className="text-primary size-5" />
              </div>
              <span className="text-xl font-medium text-gray-700">{title}</span>
              <p className="text-[13px] leading-[1.6] text-gray-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
