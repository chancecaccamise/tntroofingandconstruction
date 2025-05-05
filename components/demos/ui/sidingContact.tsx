'use client';

import { useForm } from '@formspree/react';
import React from 'react';

export default function SidingContact() {
  const [state, handleSubmit] = useForm("xeogelkl");

  return (
    <div id="contact" className="relative isolate bg-gray-50 pt-36 pb-20 scroll-mt-36 min-h-screen">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        {/* Left Column: Siding-focused paragraph */}
        <div className="relative px-6 pt-8 pb-20 lg:static lg:px-8 lg:py-24">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Schedule a Free Siding Consultation
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Whether your siding is cracked, faded, warped, or overdue for a deep clean, our team is here to help. We offer full-service siding inspections, repairs, replacements, and cleanings for homes across the Raleigh, Garner, and surrounding North Carolina areas.
              <br /><br />
              Fill out the form below to book your free estimate. A siding specialist will reach out shortly to learn more about your needs and walk you through the best solutions for protecting and enhancing your home’s exterior.
            </p>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="w-full max-w-sm mx-auto lg:max-w-md bg-white text-gray-900 p-8 mt-12 lg:ml-12 rounded-lg shadow-lg">
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
                  <input id="zip-code" name="zip-code" type="text" placeholder="27529" required className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-blue-400" />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-900 pb-2">Select a Service</label>
                <select id="service" name="service" required className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-blue-400">
                  <option value="" disabled selected>Select a service</option>
                  <option value="siding-inspection">Siding Inspection</option>
                  <option value="siding-repair">Siding Repair</option>
                  <option value="siding-cleaning">Siding Cleaning</option>
                  <option value="siding-replacement">Siding Replacement</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 pb-2">Message</label>
                <textarea id="message" name="message" placeholder="Write your message here..." rows={4} required className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-blue-400"></textarea>
              </div>

              <button type="submit" disabled={state.submitting} className="w-full bg-blue-400 py-2 rounded-md text-white font-semibold hover:bg-blue-500">
              Get a Free Estimate Today
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="mt-20 px-4 lg:px-20">
        <iframe
          title="TNT Roofing and Construction Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.2647164539233!2d-78.62137118474523!3d35.70130058019092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acf3c7557ad255%3A0x9ed7df26bdb8d3d3!2s500%20Benson%20Rd%20%23222%2C%20Garner%2C%20NC%2027529!5e0!3m2!1sen!2sus!4v1680508984512!5m2!1sen!2sus"
          className="w-full h-[400px] rounded-lg shadow-md border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
