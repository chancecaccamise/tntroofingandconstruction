'use client';

import Image from 'next/image';
import React from 'react';

export default function GutterFeatureTwo() {
  return (
    <section className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Gutter Maintenance */}
        <div className="space-y-6">
          <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/gutter maintenance.jpg" // Replace with actual image path
              alt="Technician performing gutter maintenance on home"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">Routine Gutter Maintenance</h3>
            <p className="mt-4 text-lg text-gray-700">
              Without regular upkeep, gutters can become clogged with leaves, twigs, and roof debris—causing overflows that damage siding, fascia boards, and even your foundation. Our <strong>gutter maintenance services</strong> are designed to keep your system flowing freely and functioning at its best year-round.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              We provide full cleaning, system checks, and minor repairs to help North Carolina homeowners extend the life of their gutters and avoid preventable water damage during heavy rainfall seasons.
            </p>
          </div>
        </div>

        {/* Gutter Guard Installation */}
        <div className="space-y-6">
          <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/gutter guard.jpg" // Replace with actual image path
              alt="Close-up of installed gutter guards on red roof"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">Gutter Guard Installation</h3>
            <p className="mt-4 text-lg text-gray-700">
              Reduce your need for seasonal cleanings and protect your gutter system with professionally installed <strong>gutter guards</strong>. These protective barriers block out leaves, pine needles, and debris—while still allowing rainwater to pass through with ease.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              We help you select the ideal gutter guard solution based on your roof design, local tree coverage, and budget. Whether you&apos;re upgrading an existing system or starting fresh, our guards offer long-term protection and peace of mind during even the heaviest North Carolina storms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
