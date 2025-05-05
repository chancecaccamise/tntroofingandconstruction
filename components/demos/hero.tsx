'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';


const navigation = [
  { name: 'Home', href: '#Home' },
  { name: 'Services', href: '#Services' },
  { name: 'Gallery', href: '#Gallery' },
  { name: 'Contact Us', href: '#Contact' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div>
      {/* Navbar Section */}
      <header className="bg-white shadow-md fixed inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="relative flex items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo on the Left */}
          <div className="flex lg:flex-1">
            <a href="#Home" className="-m-1.5 p-1.5">
              <span className="sr-only">TNT Construction & Repair</span>
              <Image
                alt="Voelker Construction & Repair Logo"
                src="/logo/Final Format_Voelker Construction And Repair.png"
                width={400} 
                height={300}
                className="h-16 w-auto"
              />
            </a>
          </div>

          {/* Centered Nav Links */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex space-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-lg font-semibold text-gray-900 hover:text-red-600">
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button (Right Side) */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-600"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-300">
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-600"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold text-gray-900 hover:bg-gray-100"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* Hero Section */}
      <div className="relative isolate overflow-hidden pt-24 bg-gray-900">
        <Image
          alt="Hero Background"
          src="/tank0Dark BRB.png"
          width={400} 
          height={300}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
              Western New York&apos;s Trusted Experts in Landscaping & Hardscaping
              </h1>
              <p className="mt-8 text-lg font-medium text-gray-300 sm:text-xl">
              From mulch and trimming to hardscaping and tree removal, we provide top-quality landscaping services across Western New York. Transform your outdoor space with expert care and precision.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#Gallery"
                  className="rounded-md bg-blue-400 px-4 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                >
                  Gallery
                </a>
                <a href="#Contact" className="text-lg font-semibold text-white">
                  Contact Us <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
