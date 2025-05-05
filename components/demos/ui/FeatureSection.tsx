import Image from 'next/image';
import Link from 'next/link';
import { HomeModernIcon } from '@heroicons/react/24/solid';

const services = [
  {
    title: 'Roofing Systems',
    image: '/blackroofing.jpeg',
    href: '/services/roofing',
  },
  {
    title: 'Siding Systems',
    image: '/sidingrepairs.jpg',
    href: '/services/siding',
  },
  {
    title: 'Gutter Systems',
    image: '/gutterSystems.jpg',
    href: '/services/gutters',
  },
  
];

export default function RoofingServices() {
  return (
    <section className="py-16 px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Services */}
        <div className="space-y-6">
          {services.map((service) => (
            <Link href={service.href} key={service.title} className="block">
              <div className="relative h-40 rounded overflow-hidden shadow-lg group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10 transition duration-300 group-hover:opacity-80" />
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="relative z-20 h-full w-full flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold uppercase flex items-center gap-2 transition-all duration-300 transform group-hover:-translate-y-1 group-hover:scale-105">
                    {service.title}
                    <span className="inline-block w-6 h-6 border-2 border-white rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Right Column - Text */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <HomeModernIcon className="w-6 h-6 text-[#0080CB]" />
            <span className="text-[#0080CB] font-bold uppercase tracking-wide text-sm">
              Roofing Services We Provide
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
            Our Experience.<br />Your Benefit.
          </h2>
          <p className="text-gray-700 mb-5">
            With years of experience as a top Charlotte roofing contractor, Roof Medic is here for your benefit. As a full-service roofing company in the greater Charlotte area and Raleigh, we can help provide safety and security all while increasing energy efficiency and property value. Our team is skilled in all aspects of roofing services, from roof repair and roof replacement to installing a brand-new roof.
          </p>
          <p className="text-gray-700 mb-6">
            We serve North Carolina homes and businesses, ensuring each project is handled with care and matches our own high standards. Whether you need commercial roofing or residential services, our quality roofing solutions are designed to last. From addressing storm damage to offering proactive maintenance, we deliver final products that enhance the value and safety of your property. Choose us as your Charlotte roofing contractor and we will help provide you with peace of mind and a roof that lasts.
          </p>
          <a href="#services" className="text-blue-400 font-bold uppercase text-sm hover:underline">
            See All Services
          </a>
        </div>
      </div>
    </section>
  );
}
