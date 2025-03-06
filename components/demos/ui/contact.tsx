'use client';

import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("mrbpzgad");

  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        {/* Left Column: Stays Visible */}
        <div className="relative px-6 pb-20 pt-16 sm:pt-24 lg:static lg:px-8 lg:py-36">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Get in touch
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
            Ready to transform your space with a stunning fish tank? Whether you need a custom-built aquarium, professional assembly, or ongoing maintenance, we’re here to help. Reach out to us today, and let’s create something extraordinary together!
            </p>
            <dl className="mt-10 space-y-4 text-base/7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  69 Madaline Lane
                  <br />
                  Depew, NY 14043
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <PhoneIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  <a href="tel:+1 (716) 771-9033" className="hover:text-blue-500">
                    +1 (716) 771-9033
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  <a href="mailto:David@bluereefbuffalo.com" className="hover:text-blue-500">
                    David@bluereefbuffalo.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Right Column: Form / Success Message */}
        <div className="px-6 pb-24 pt-16 sm:pb-32 lg:px-8 lg:py-36">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            {state.succeeded ? (
              <div className="p-6 text-center rounded-lg bg-green-100 border border-blue-400">
                <h3 className="text-2xl font-semibold text-gray-700">Thanks for reaching out!</h3>
                <p className="mt-2 text-lg text-gray-600">We will be in contact with you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
                      First name
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="first-name"
                        name="first-name"
                        type="text"
                        placeholder="David"
                        autoComplete="given-name"
                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-blue-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
                      Last name
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="last-name"
                        name="last-name"
                        placeholder="Stanley"
                        type="text"
                        autoComplete="family-name"
                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-blue-600"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="David@bluereefbuffalo.com"
                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-blue-600"
                      />
                    </div>
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">
                      Phone number
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="phone-number"
                        name="phone-number"
                        placeholder="(716) 771-9033"
                        type="tel"
                        autoComplete="tel"
                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-blue-600"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                      Message
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Write your message here..."
                        rows={4}
                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-blue-600"
                      />
                    </div>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="rounded-md bg-blue-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline-blue-600"
                  >
                    Send message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
