'use client';

import Image from 'next/image';
import React from 'react';

export default function SidingFeatureTwo() {
  return (
    <section className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Siding Cleaning */}
        <div className="space-y-6">
          <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/siding cleaning.jpg" // Replace with actual image path
              alt="Professional siding cleaning service in North Carolina"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">Siding Cleaning</h3>
            <p className="mt-4 text-lg text-gray-700">
              Over time, grime, algae, and mold can take a toll on your home&apos;s siding—fading its color and reducing your curb appeal. Our <strong>professional siding cleaning services</strong> in North Carolina are designed to remove tough buildup without compromising the integrity of your exterior materials.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              We use specialized low-pressure soft washing methods and eco-safe cleaning solutions tailored to your siding type—whether vinyl, wood, or fiber cement. This ensures a deep, damage-free clean that leaves your home looking refreshed, protected, and ready for any season.
            </p>
          </div>
        </div>

        {/* Siding Replacement */}
        <div className="space-y-6">
          <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/siding replacement.jpg" // Replace with actual image path
              alt="Siding replacement project in progress in North Carolina"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">Siding Replacement</h3>
            <p className="mt-4 text-lg text-gray-700">
              When damage is beyond repair, or your current siding no longer meets your home&apos;s protection or energy-efficiency needs, our team provides expert <strong>siding replacement services</strong> throughout North Carolina. We manage the entire process—from material selection to final installation—with a focus on durability, aesthetics, and long-term value.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              We offer a wide variety of high-performance siding materials including vinyl, fiber cement, and engineered wood—each designed to withstand the region&apos;s climate conditions. Our siding contractors will help you find the perfect fit for your home and budget while improving resale value and reducing maintenance needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
