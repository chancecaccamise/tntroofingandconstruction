"use client";

import MasonryGrid from "./masonryGrid";

export default function NewGallery() {
  return (
    <div className="scroll-smooth overflow-hidden">
      <div className="w-full md:pt-10 md:pb-10 px-4 md:px-16 bg-gradient md:bg-fixed">
        <div className="flex flex-col items-center text-center gap-5 md:gap-8 mt-10 md:pt-[3rem] max-w-4xl mx-auto">
          <h1 className="text-gray-800 font-medium tracking-tight text-4xl md:text-5xl">
            Built to Last, Crafted for Western New York
          </h1>
          <p className="text-lg text-gray-700">
            Quality craftsmanship, built for WNY’s tough seasons. From framing and siding to roofing and flooring, we deliver durable, professional results. 
            Browse our gallery to see our work in action.
          </p>
        </div>
        <MasonryGrid />
      </div>
    </div>
  );
}
