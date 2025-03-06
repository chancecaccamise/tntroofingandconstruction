'use client';

import MasonryGrid from "./masonryGrid";

export default function NewGallery() {
  return (
    <div className="scroll-smooth overflow-hidden">
        <div className="w-full md:pt-10 md:pb-10 px-4 md:px-16 justify-between md:bg-fixed bg-gradient">
            <div className="flex flex-col md:flex-row gap-5 md:gap-10 mt-10 md:pt-[3rem]">
                <h1 className="text-gray-800 font-medium md:w-1/2 tracking-tight text-4xl md:text-5xl">
                Bringing Nature Indoors, One Tank at a Time
                </h1>
                <p className="md:w-1/2">
                A well-designed aquarium doesn’t just enhance a space—it creates an experience. Our custom fish tanks bring a sense of serenity and sophistication to businesses, offering a mesmerizing focal point for customers and employees alike. Browse our gallery to discover our craftsmanship in action.
                </p>
            </div>
            <MasonryGrid/>
        </div>
    </div>
  );
}