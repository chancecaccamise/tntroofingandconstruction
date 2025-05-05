'use client';

import React from 'react';
import Image from 'next/image';
import { WrenchScrewdriverIcon, ShieldCheckIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function RoofingSystems() {
  return (
    <section className="bg-white pt-52 pb-20 px-6 lg:px-8 scroll-mt-36">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Comprehensive Roofing Services
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Our team brings professional craftsmanship and reliable service to every roofing project. From emergency repairs to full roof replacements, we’re proud to help protect homes across North Carolina with quality you can count on.
          </p>
          <ul className="mt-8 space-y-6">
            <li className="flex items-start">
              <WrenchScrewdriverIcon className="h-6 w-6 text-blue-500 mt-1" />
              <span className="ml-3 text-base text-gray-700">
                <strong>Roof Repairs:</strong> Fast, effective solutions for leaks, storm damage, and wear — restoring the integrity of your roof without delay.
              </span>
            </li>
            <li className="flex items-start">
              <ShieldCheckIcon className="h-6 w-6 text-blue-500 mt-1" />
              <span className="ml-3 text-base text-gray-700">
                <strong>Roof Replacements:</strong> Complete tear-offs and new installations using premium materials for long-term protection and curb appeal.
              </span>
            </li>
            <li className="flex items-start">
              <MagnifyingGlassIcon className="h-6 w-6 text-blue-500 mt-1" />
              <span className="ml-3 text-base text-gray-700">
                <strong>Roof Inspections:</strong> Thorough assessments to identify issues early, extend lifespan, and keep your roof performing its best.
              </span>
            </li>
          </ul>
        </div>

        {/* Right Column: Image */}
        <div className="relative h-96 w-full">
          <Image
            src="/blackroofing.jpeg" // Replace with your actual image path
            alt="Modern roofing system"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
