'use client';

import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useForm } from '@formspree/react';

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'Services',
    dropdown: true,
    items: [
      { name: 'Roofing Systems', href: '/services/roofing' },
      { name: 'Siding Systems', href: '/services/siding' },
      { name: 'Gutter Systems', href: '/services/gutters' },
    ],
  },
  { name: 'Career', href: '/careers' },
  { name: 'Contact Us', href: '/contact' },
];

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [state, handleSubmit] = useForm("xeogelkl");

  return (
    <div>
      {/* Navbar Section */}
      <header className="bg-white shadow-md fixed inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="relative flex items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">TNT Roofing and Construction</span>
              <Image alt="TNT Roofing and Construction" src="/logo/logo.png" width={400} height={300} className="h-24 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex lg:flex-1 justify-center space-x-12">
            {navigation.map((item) =>
              item.dropdown ? (
                <div key={item.name} className="relative group">
                  <button className="text-lg font-semibold text-gray-900 hover:text-blue-400">
                    {item.name}
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform transition duration-200 ease-in-out z-50">
                    {item.items.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg font-semibold text-gray-900 hover:text-blue-400"
                >
                  {item.name}
                </a>
              )
            )}
          </div>

          {/* Right Section: Phone + Button */}
          <div className="hidden lg:flex lg:items-center space-x-6">
            <a href="tel:9194381132" className="text-lg font-semibold text-gray-900 hover:text-blue-400">
              (919) 438-1132
            </a>
            <a
              href="/contact"
              className="rounded-md bg-blue-400 px-4 py-2.5 text-white text-sm font-semibold shadow-md hover:bg-blue-500"
            >
              Get a Free Estimate Today
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-600">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
        </nav>

        {/* Mobile Drawer */}
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
                  {navigation.map((item) =>
                    item.dropdown ? (
                      <div key={item.name}>
                        <span className="block px-3 py-2 text-lg font-semibold text-gray-900">
                          {item.name}
                        </span>
                        <div className="pl-4 space-y-1">
                          {item.items.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block rounded-lg px-3 py-2 text-base text-gray-700 hover:bg-gray-100"
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold text-gray-900 hover:bg-gray-100"
                      >
                        {item.name}
                      </a>
                    )
                  )}
                </div>

                {/* Phone + CTA in mobile menu */}
                <div className="pt-6 border-t border-gray-200 space-y-4">
                  <a href="tel:9194381132" className="block text-base font-medium text-gray-900">
                    (919) 438-1132
                  </a>
                  <a
                    href="/contact"
                    className="block w-full text-center rounded-md bg-blue-400 px-4 py-2 text-white font-semibold hover:bg-blue-500"
                  >
                    Get a Free Estimate Today
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* Hero Section */}
<div className="relative bg-cover bg-center text-white pt-24" style={{ backgroundImage: "url('/roofingHero.jpg')" }}>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-75"></div>
  <div className="relative mx-auto flex max-w-7xl flex-col lg:flex-row items-center justify-between px-6 py-16 lg:px-8 lg:py-24 space-y-12 lg:space-y-0">
    {/* Left Column: Hero Text */}
    <div className="max-w-2xl text-center lg:text-left">
      <h1 className="text-4xl font-bold sm:text-5xl">Roofing Services Built for North Carolina Homes</h1>
      <p className="mt-4 text-lg text-gray-300">
        Protect your home with expert <strong>roof replacements</strong>, <strong>storm damage repairs</strong>, and thorough <strong>roof inspections</strong>—all backed by trusted craftsmanship and high-quality materials. Serving Raleigh, Garner, and surrounding areas, our licensed roofing contractors are here to deliver results that last.
      </p>
      <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <a href="#Services" className="rounded-md bg-blue-400 px-5 py-2.5 text-white text-lg font-semibold shadow-md hover:bg-blue-500">
          OUR SERVICES
        </a>
        <a href="#Contact" className="rounded-md border border-white px-5 py-2.5 text-lg font-semibold text-white hover:bg-white hover:text-gray-900">
          CONTACT US
        </a>
      </div>
    </div>

          {/* Right Column: Contact Form */}
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
                    <input id="first-name" name="first-name" type="text" placeholder="John" required className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-blue-400" />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-semibold text-gray-900 pb-2">Last name</label>
                    <input id="last-name" name="last-name" type="text" placeholder="Doe" required className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-blue-400" />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone-number" className="block text-sm font-semibold text-gray-900 pb-2">Phone number</label>
                    <input id="phone-number" name="phone-number" type="tel" placeholder="(919) 438-1132" required className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-blue-400" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 pb-2">Email</label>
                    <input id="email" name="email" type="email" placeholder="johndoe@gmail.com" required className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-blue-400" />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="address" className="block text-sm font-semibold text-gray-900 pb-2">Address</label>
                    <input id="address" name="address" type="text" placeholder="123 Main St" required className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-blue-400" />
                  </div>
                  <div>
                    <label htmlFor="zip-code" className="block text-sm font-semibold text-gray-900 pb-2">Zip Code</label>
                    <input id="zip-code" name="zip-code" type="text" placeholder="10001" required className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-blue-400" />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-900 pb-2">Select a Service</label>
                  <select id="service" name="service" required className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-blue-400">
                    <option value="" disabled selected>Select a service</option>
                    <option value="roof-repair">Roof Repair</option>
                    <option value="roof-replacement">Roof Replacement</option>
                    <option value="inspection">Inspection</option>
                    <option value="gutter-systems">Gutter Systems</option>
                    <option value="siding-systems">Siding Systems</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 pb-2">Message</label>
                  <textarea id="message" name="message" placeholder="Write your message here..." rows={4} required className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-blue-400"></textarea>
                </div>

                <button type="submit" disabled={state.submitting} className="w-full bg-blue-400 py-2 rounded-md text-white font-semibold hover:bg-blue-500">
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
