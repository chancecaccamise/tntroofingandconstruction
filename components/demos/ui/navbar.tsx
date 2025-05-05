'use client';

import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

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

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <header className="bg-white shadow-md fixed inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="relative flex items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">TNT Roofing and Construction</span>
              <Image alt="TNT Roofing and Construction" src="/logo/logo.png" width={400} height={300} className="h-24 w-auto" />
            </Link>
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
                    {item.items?.map((subItem) =>
                      subItem.href ? (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {subItem.name}
                        </Link>
                      ) : null
                    )}
                  </div>
                </div>
              ) : item.href ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-semibold text-gray-900 hover:text-blue-400"
                >
                  {item.name}
                </Link>
              ) : null
            )}
          </div>

          {/* Right Section: Phone + Button */}
          <div className="hidden lg:flex lg:items-center space-x-6">
            <a href="tel:9194381132" className="text-lg font-semibold text-gray-900 hover:text-blue-400">
              (919) 438-1132
            </a>
            <Link
              href="/contact"
              className="rounded-md bg-blue-400 px-4 py-2.5 text-white text-sm font-semibold shadow-md hover:bg-blue-500"
            >
              Get a Free Estimate Today
            </Link>
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
                          {item.items?.map((subItem) =>
                            subItem.href ? (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block rounded-lg px-3 py-2 text-base text-gray-700 hover:bg-gray-100"
                              >
                                {subItem.name}
                              </Link>
                            ) : null
                          )}
                        </div>
                      </div>
                    ) : item.href ? (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold text-gray-900 hover:bg-gray-100"
                      >
                        {item.name}
                      </Link>
                    ) : null
                  )}
                </div>

                {/* Phone + CTA in mobile menu */}
                <div className="pt-6 border-t border-gray-200 space-y-4">
                  <a href="tel:9194381132" className="block text-base font-medium text-gray-900">
                    (919) 438-1132
                  </a>
                  <Link
                    href="/contact"
                    className="block w-full text-center rounded-md bg-blue-400 px-4 py-2 text-white font-semibold hover:bg-blue-500"
                  >
                    Get a Free Estimate Today
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
