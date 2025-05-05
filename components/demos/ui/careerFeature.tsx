import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';

const features = [
    {
      name: 'Fast-Paced Environment',
      description: `Join a team that gets the job done efficiently and professionally—most of our projects are completed in just 1–2 days.`,
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Licensed, Insured & Respected',
      description: `Be part of a company that's fully licensed, insured, and trusted by homeowners across North Carolina.`,
      icon: LockClosedIcon,
    },
    {
      name: 'Real Growth Opportunities',
      description: `Whether you're starting out or have years of experience, we offer room to grow, learn, and take on leadership roles.`,
      icon: ServerIcon,
    },
  ];

export default function CareerFeature() {
  return (
    <section className="bg-white pt-40 pb-24 sm:pt-48 sm:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 gap-x-12 items-center">
          {/* Text Column */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-blue-400">Careers at TNT</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Build More Than Roofs —Build Your Future.
            </p>
            <p className="mt-6 text-lg text-gray-700">
              At TNT Roofing and Construction, we&apos;re always looking for dependable, motivated individuals to join our growing crew.
              Whether you&apos;re on the roof or in the office, you&apos;ll be part of a team that values quality work, accountability, and growth.
            </p>

            <dl className="mt-10 space-y-6 text-base text-gray-600">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-10">
                  <feature.icon className="absolute left-0 top-1 h-6 w-6 text-blue-400" aria-hidden="true" />
                  <dt className="font-semibold text-gray-900">{feature.name}</dt>
                  <dd className="mt-1">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Image Column */}
          <div className="relative">
            <img
              alt="Team member working on a roof"
              src="/roofing team.jpg" // Replace with your real team/career image if you have one
              className="w-full rounded-xl shadow-xl ring-1 ring-gray-300/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
