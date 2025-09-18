import { Building2, LayoutDashboard, UserPlus } from "lucide-react";

const STEPS = [
  {
    icon: UserPlus,
    title: "Sign Up",
    description: "Create your account in seconds using email or phone.",
  },
  {
    icon: Building2,
    title: "Choose Role",
    description:
      "Select whether you are a patient, private clinic, or hospital.",
  },
  {
    icon: LayoutDashboard,
    title: "Access Dashboard",
    description:
      "Get instant access to your role-based dashboard and start managing.",
  },
];

const HowItWorks = () => {
  return (
    <section className="my-20">
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-2 text-center">
          <h4 className="text-primary text-lg/10">How It Works</h4>
          <h2 className="text-3xl font-medium text-neutral-800 sm:text-4xl">
            Simple 3-step process
          </h2>
          <p className="text-sm text-gray-500">
            Getting started with Medora is easy for patients, clinics, and
            hospitals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {STEPS.map(({ title, icon: Icon, description }, index) => (
            <div
              key={title}
              className="relative flex max-w-[340px] flex-col gap-5 rounded-xl py-4 pr-9 pl-4 shadow-md ring-1 ring-gray-950/10"
            >
              <div className="absolute -top-4 left-4 flex size-8 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white shadow-md">
                {index + 1}
              </div>

              <div className="border-primary/10 mt-3 w-fit rounded-lg border p-3">
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

export default HowItWorks;
