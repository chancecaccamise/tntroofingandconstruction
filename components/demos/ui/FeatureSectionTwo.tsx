import Image from 'next/image';
import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function AboutHighlight() {
  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left - Text Block */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <CheckCircleIcon className="w-6 h-6 text-blue-400" />
            <span className="text-blue-400 font-bold uppercase text-sm tracking-wider">
              Why Homeowners Choose Us
            </span>
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Roofing That Puts Families First
          </h2>
          <p className="text-gray-700 mb-5">
            We’re more than just roofing contractors — we’re your neighbors.
            With every project, we bring unmatched care, attention to detail,
            and a deep commitment to protecting what matters most: your home.
          </p>
          <p className="text-gray-700 mb-8">
            Whether you need repairs, replacements, or an expert opinion, our
            licensed and insured team is here to make the process smooth and stress-free.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-400 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-md transition"
          >
            Schedule a Free Estimate
          </Link>
        </div>

        {/* Right - Image */}
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/family in front of house.jpg"
            alt="Happy family under new roof"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
