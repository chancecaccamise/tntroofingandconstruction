'use client';

import React from 'react';
import Image from 'next/image';
import { WrenchScrewdriverIcon, ShieldCheckIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function GutterSystems() {
  return (
    <section className="bg-white pt-52 pb-20 px-6 lg:px-8 scroll-mt-36">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Professional Gutter Solutions in North Carolina
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            A properly installed gutter system is essential for protecting your home’s foundation, siding, and landscaping. Without it, rainwater can collect around the base of your home, leading to costly issues like water damage, soil erosion, and even basement flooding. Our North Carolina gutter experts provide seamless installation and long-term maintenance to keep water flowing away from your property—safely and efficiently.
          </p>

          <ul className="mt-8 space-y-6">
            <li className="flex items-start">
              <ShieldCheckIcon className="h-6 w-6 text-blue-500 mt-1" />
              <span className="ml-3 text-base text-gray-700">
                <strong>Gutter Installation:</strong> Custom-fit systems built for durability and maximum drainage performance.
              </span>
            </li>
            <li className="flex items-start">
              <WrenchScrewdriverIcon className="h-6 w-6 text-blue-500 mt-1" />
              <span className="ml-3 text-base text-gray-700">
                <strong>Gutter Repairs:</strong> Fast fixes for sagging, leaks, or damaged sections to restore full function.
              </span>
            </li>
            <li className="flex items-start">
              <MagnifyingGlassIcon className="h-6 w-6 text-blue-500 mt-1" />
              <span className="ml-3 text-base text-gray-700">
                <strong>Gutter Maintenance:</strong> Preventative cleaning and tune-ups to ensure smooth flow and prevent overflow.
              </span>
            </li>
            <li className="flex items-start">
              <ShieldCheckIcon className="h-6 w-6 text-blue-500 mt-1" />
              <span className="ml-3 text-base text-gray-700">
                <strong>Gutter Guard Installation:</strong> Keep out leaves and debris with protective solutions designed for long-term reliability.
              </span>
            </li>
          </ul>
        </div>

        {/* Right Column: Image */}
        <div className="relative h-96 w-full">
          <Image
            src="/gutter systems.jpg" // Replace with your actual image path
            alt="Gutter installation on residential home"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
