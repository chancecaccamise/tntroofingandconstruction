'use client';

import React from 'react';
import Image from 'next/image';
import { WrenchScrewdriverIcon, ShieldCheckIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function SidingSystems() {
  return (
    <section className="bg-white pt-52 pb-20 px-6 lg:px-8 scroll-mt-36">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Expert Siding Services for North Carolina Homes
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Protect and enhance your home’s exterior with professional siding solutions. From detailed inspections and targeted repairs to deep cleaning and full replacements, we help homeowners across North Carolina boost curb appeal and ensure lasting durability.
          </p>
          <ul className="mt-8 space-y-6">
            <li className="flex items-start">
              <MagnifyingGlassIcon className="h-6 w-6 text-blue-500 mt-1" />
              <span className="ml-3 text-base text-gray-700">
                <strong>Siding Inspections:</strong> Identify early signs of damage, moisture issues, or aging to prevent costly repairs down the line.
              </span>
            </li>
            <li className="flex items-start">
              <WrenchScrewdriverIcon className="h-6 w-6 text-blue-500 mt-1" />
              <span className="ml-3 text-base text-gray-700">
                <strong>Siding Repairs:</strong> From cracks and warping to storm damage, we restore your siding’s strength and appearance quickly and professionally.
              </span>
            </li>
            <li className="flex items-start">
              <ShieldCheckIcon className="h-6 w-6 text-blue-500 mt-1" />
              <span className="ml-3 text-base text-gray-700">
                <strong>Siding Cleaning:</strong> Remove dirt, mildew, and buildup to revitalize your home’s exterior and maintain its beauty.
              </span>
            </li>
            <li className="flex items-start">
              <ShieldCheckIcon className="h-6 w-6 text-blue-500 mt-1" />
              <span className="ml-3 text-base text-gray-700">
                <strong>Siding Replacement:</strong> Upgrade to modern, low-maintenance materials that offer superior protection and energy efficiency.
              </span>
            </li>
          </ul>
        </div>

        {/* Right Column: Image */}
        <div className="relative h-96 w-full">
          <Image
            src="/sidingNew.jpeg" // Replace this with your siding image path
            alt="Modern siding system"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
