'use client';

import React from 'react';
import Image from 'next/image';

const issues = [
  { title: 'Granule Loss', image: '/granule loss.jpg' },
  { title: 'Shingle Splitting', image: '/shingle splitting.jpg' },
  { title: 'Missing Shingles', image: '/missing shingle.jpg' },
  { title: 'Broken Shingles', image: '/broken shingle.jpg' },
  { title: 'Curling Shingles', image: '/curling shingle.jpg' },
  { title: 'Lifted Shingles', image: '/lifted shingle.jpg' },
  { title: 'Shrinkage', image: '/roof shrinkage.jpg' },
  { title: 'Weather Damage', image: '/weather damage roof.jpeg' },
];

export default function ShingleDamageGrid() {
  return (
    <section className="bg-white py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
          Common Shingle Damage Signs
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Shingles are your roof’s first line of defense, but over time they face wear from UV rays, heavy rain, and high winds. Here are common signs it's time for a professional roof assessment.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {issues.map(({ title, image }) => (
            <div key={title} className="bg-white rounded-lg shadow-md hover:shadow-xl transition">
              <div className="relative h-48 w-full">
                <Image
                  src={image}
                  alt={title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
