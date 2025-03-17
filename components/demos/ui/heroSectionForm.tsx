'use client';

import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useForm } from '@formspree/react';

const navigation = [
  { name: 'Home', href: '#Home' },
  { name: 'Services', href: '#Services' },
  { name: 'Gallery', href: '#Gallery' },
  { name: 'Contact Us', href: '#Contact' },
];

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [state, handleSubmit] = useForm("xoveqgjr");

  return (
    <div>
      {/* Navbar Section */}
      <header className="bg-white shadow-md fixed inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="relative flex items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#Home" className="-m-1.5 p-1.5">
              <span className="sr-only">Voelker Construction & Repair</span>
              <Image alt="Voelker Construction & Repair Logo" src="/logo/Final Format_Voelker Construction And Repair.png" width={400} height={300} className="h-16 w-auto" />
            </a>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex space-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-lg font-semibold text-gray-900 hover:text-red-600">{item.name}</a>
            ))}
          </div>
          <div className="flex lg:hidden">
            <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-600">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-300">
            <div className="flex items-center justify-between">
              <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-gray-600">
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold text-gray-900 hover:bg-gray-100">{item.name}</a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* Hero Section */}
      <div className="relative bg-cover bg-center text-white pt-24" style={{ backgroundImage: "url('/roofingImage.jpeg')" }}>
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-75"></div>
    <div className="relative mx-auto flex max-w-7xl flex-col lg:flex-row items-center justify-between px-6 py-16 lg:px-8 lg:py-24 space-y-12 lg:space-y-0">
      {/* Left Column: Hero Text */}
      <div className="max-w-2xl text-center lg:text-left">
        <h1 className="text-4xl font-bold sm:text-5xl">Reliable Construction & Repair Services in Western New York</h1>
        <p className="mt-4 text-lg text-gray-300">
          From expert framing to durable roofing, flooring, and siding, we deliver top-quality craftsmanship you can trust. Let’s build something great together—contact us today for a free estimate!
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
  <a href="#Services" className="rounded-md bg-red-600 px-5 py-2.5 text-white text-lg font-semibold shadow-md hover:bg-red-500">
    OUR SERVICES
  </a>
  <a href="#Contact" className="rounded-md border border-white px-5 py-2.5 text-lg font-semibold text-white hover:bg-white hover:text-gray-900">
    CONTACT US
  </a>
</div>
      </div>

          {/* Right Column: Contact Form (Increased Padding for Better Spacing) */}
          <div className="w-full max-w-sm mx-auto lg:max-w-md bg-white text-gray-900 p-8 lg:ml-12 rounded-lg shadow-lg">
  
  {state.succeeded ? (
              <div className="p-6 text-center rounded-lg bg-green-100 border border-blue-400">
                <h3 className="text-2xl font-semibold text-gray-700">Thanks for reaching out!</h3>
                <p className="mt-2 text-lg text-gray-600">We will be in contact with you soon.</p>
              </div>
            ) : (
  <form onSubmit={handleSubmit} className="space-y-5">
    <h2 className="text-2xl font-bold text-gray-900 text-left mb-6">Schedule a Free Consultation Now</h2>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div>
        <label htmlFor="first-name" className="block text-sm font-semibold text-gray-900 pb-2">First name</label>
        <input id="first-name" name="first-name" type="text" placeholder="John" required className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-red-600" />
      </div>
      <div>
        <label htmlFor="last-name" className="block text-sm font-semibold text-gray-900 pb-2">Last name</label>
        <input id="last-name" name="last-name" type="text" placeholder="Doe" required className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-red-600" />
      </div>
    </div>
    <label htmlFor="phone-number" className="block text-sm font-semibold text-gray-900 pb-2">Phone number</label>
    <input id="phone-number" name="phone-number" placeholder="(716) 299-9100" type="tel" required className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-red-600" />
    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 pb-2">Email</label>
    <input id="email" type="email" name="email" placeholder="johndoe@gmail.com" required className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-red-600" />
    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 pb-2">Message</label>
    <textarea id="message" name="message" placeholder="Write your message here..." rows={4} required className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-red-600"></textarea>
    <button type="submit" disabled={state.submitting} className="w-full bg-red-600 py-2 rounded-md text-white font-semibold hover:bg-red-500">
      Send Message
    </button>
  </form>
  )}
</div>

        </div>
      </div>
    </div>
  );
}
