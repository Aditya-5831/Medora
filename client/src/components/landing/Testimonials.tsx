import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Dr. Ananya Sharma",
    role: "Private Clinic Owner",
    feedback:
      "Medora has completely transformed how we manage appointments and patient records. It's intuitive and reliable.",
  },
  {
    name: "Rahul Verma",
    role: "Patient",
    feedback:
      "Booking appointments is now so quick and easy. I can find doctors and manage my visits without any hassle.",
  },
  {
    name: "City Hospital",
    role: "Hospital Administration",
    feedback:
      "The role-based dashboard helps our staff stay organized and efficient. A must-have for modern healthcare.",
  },
];

const Testimonials = () => {
  return (
    <section className="my-20">
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-2 text-center">
          <h4 className="text-primary text-lg/10">Testimonials</h4>
          <h2 className="text-3xl font-medium text-neutral-800 sm:text-4xl">
            Trusted by patients and healthcare providers
          </h2>
          <p className="text-sm text-gray-500">
            Here’s what our users have to say about their Medora experience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {TESTIMONIALS.map(({ name, role, feedback }) => (
            <div
              key={name}
              className="relative flex max-w-[340px] flex-col gap-5 rounded-xl py-4 pr-9 pl-4 shadow-md ring-1 ring-gray-950/10"
            >
              <div className="flex gap-1 text-yellow-500">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
              </div>
              <p className="text-[13px] leading-[1.6] text-gray-600">
                {feedback}
              </p>
              <div className="mt-3">
                <span className="block text-sm font-semibold text-gray-800">
                  {name}
                </span>
                <span className="text-xs text-gray-500">{role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
