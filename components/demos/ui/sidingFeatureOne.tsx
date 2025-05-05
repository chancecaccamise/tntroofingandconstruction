'use client';

import Image from 'next/image';
import React from 'react';

export default function SidingFeatureOne() {
  return (
    <section className="bg-gray-50 px-6 py-24 lg:px-8 space-y-24">
      {/* Siding Inspection Section */}
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Left */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900">Professional Siding Inspections</h3>
          <p className="mt-4 text-gray-700 text-lg">
            Our certified North Carolina siding experts provide <strong>thorough siding inspections</strong> to uncover hidden damage and prevent future structural issues. Whether you&apos;re preparing for a remodel or responding to storm damage, our team evaluates your home’s exterior with precision—checking for early warning signs that could compromise your siding’s performance and curb appeal.
          </p>
          <ul className="mt-6 list-disc list-inside text-gray-700 space-y-2">
            <li>Hairline cracks, punctures, or panel gaps</li>
            <li>Warping, bulging, or uneven alignment</li>
            <li>UV-related fading or discoloration</li>
            <li>Mold, algae, or mildew buildup</li>
            <li>Loose, unstable, or deteriorating siding boards</li>
          </ul>
        </div>

        {/* Image Right */}
        <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/siding inspection new.jpg" // Replace with actual image
            alt="Home siding inspection by a professional contractor"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Siding Repair Section */}
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
        {/* Image Left */}
        <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/siding repairs.jpg" // Replace with actual image
            alt="Contractor performing siding repair in North Carolina"
            fill
            className="object-cover"
          />
        </div>

        {/* Text Right */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900">Reliable Siding Repairs</h3>
          <p className="mt-4 text-gray-700 text-lg">
            When it comes to <strong>siding repairs in North Carolina</strong>, our experienced contractors deliver fast, durable solutions that restore your home’s appearance and structural integrity. We service all major siding types—including vinyl, fiber cement, wood, and aluminum—and use top-grade materials to ensure every repair holds up to the region’s climate and conditions.
          </p>
          <ul className="mt-6 list-disc list-inside text-gray-700 space-y-2">
            <li>Replacing damaged or missing siding panels</li>
            <li>Repairing warped or sagging sections</li>
            <li>Sealing seams and joints to prevent moisture intrusion</li>
            <li>Fixing damage caused by hail, wind, or pests</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
