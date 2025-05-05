'use client';

import Image from 'next/image';
import React from 'react';

export default function GutterFeatureOne() {
  return (
    <section className="bg-gray-50 px-6 py-24 lg:px-8 space-y-24">
      {/* Gutter Installation Section */}
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Left */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900">Custom Gutter Installation</h3>
          <p className="mt-4 text-gray-700 text-lg">
            Our team provides expert <strong>gutter installation services in North Carolina</strong>, designing seamless systems that are tailored to fit your home perfectly. Using premium materials like aluminum and copper, we ensure long-lasting performance in any weather. Every installation is measured for precision and built to protect your home’s foundation, roofline, and landscaping from costly water damage.
          </p>
          <ul className="mt-6 list-disc list-inside text-gray-700 space-y-2">
            <li>Gutters sloped precisely for proper water flow</li>
            <li>Strategically placed downspouts to move water away from your foundation</li>
            <li>Secure mounting and leak-resistant joints</li>
            <li>Built to handle North Carolina’s rainfall and weather shifts</li>
          </ul>
        </div>

        {/* Image Right */}
        <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/gutter installation.jpeg" // Replace with actual image
            alt="Gutter installation on North Carolina home"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Gutter Repair Section */}
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
        {/* Image Left */}
        <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/gutter repair.jpg" // Replace with actual image
            alt="Technician performing gutter repairs on residential home"
            fill
            className="object-cover"
          />
        </div>

        {/* Text Right */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900">Reliable Gutter Repairs</h3>
          <p className="mt-4 text-gray-700 text-lg">
            Over time, gutters can develop leaks, pull away from the fascia, or become clogged—putting your home at risk for water damage. Our <strong>gutter repair specialists</strong> quickly identify and resolve issues to restore the system’s performance and prevent further structural concerns. We work on all types of gutter systems and tailor our approach to fit your specific needs.
          </p>
          <ul className="mt-6 list-disc list-inside text-gray-700 space-y-2">
            <li>Sealing holes and replacing damaged segments</li>
            <li>Correcting sagging or uneven sections</li>
            <li>Reattaching loose brackets and fasteners</li>
            <li>Clearing debris and unclogging downspouts</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
