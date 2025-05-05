import React from "react";
import { useForm } from "@formspree/react";

export function CareerForm() {
  const [state, handleSubmit] = useForm("xovdegkg");

  if (state.succeeded) {
    return (
      <div className="max-w-3xl mx-auto p-8 bg-green-100 border border-green-400 rounded-md text-center">
        <h2 className="text-2xl font-semibold text-green-800">Thanks for joining!</h2>
        <p className="mt-2 text-green-700">We appreciate your interest in working with TNT Roofing and Construction.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-16">
      <form onSubmit={handleSubmit} className="max-w-5xl mx-auto p-10 bg-white shadow-md rounded-md space-y-12">
        {/* Personal Details */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Personal Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input id="name" name="name" required className="block w-full rounded-md border border-gray-300 p-3 focus:outline-blue-400" />
            </div>
            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
              <input id="dob" name="dob" required placeholder="MM-DD-YYYY" className="block w-full rounded-md border border-gray-300 p-3 focus:outline-blue-400" />
            </div>
          </div>
        </section>

        {/* Address */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input name="address-1" placeholder="Address line 1" className="rounded-md border border-gray-300 p-3 focus:outline-blue-400" />
            <input name="address-2" placeholder="Address line 2" className="rounded-md border border-gray-300 p-3 focus:outline-blue-400" />
            <input name="city" placeholder="City" className="rounded-md border border-gray-300 p-3 focus:outline-blue-400" />
            <input name="state" placeholder="State / Province" className="rounded-md border border-gray-300 p-3 focus:outline-blue-400" />
            <input name="zip-code" placeholder="Postal / Zip Code" className="rounded-md border border-gray-300 p-3 focus:outline-blue-400" />
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input name="email" placeholder="Email" required className="rounded-md border border-gray-300 p-3 focus:outline-blue-400" />
            <input name="number" placeholder="Phone Number" required className="rounded-md border border-gray-300 p-3 focus:outline-blue-400" />
          </div>
        </section>

        {/* Previous Role */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Latest Role</h2>
          <div className="space-y-6">
            <input name="previous-job-title" placeholder="Job Title" className="block w-full rounded-md border border-gray-300 p-3 focus:outline-blue-400" />
            <input name="previous-employer" placeholder="Employer Name" className="block w-full rounded-md border border-gray-300 p-3 focus:outline-blue-400" />
            <input name="latest-role-start-date" placeholder="Start Date (MM-YYYY)" className="block w-full rounded-md border border-gray-300 p-3 focus:outline-blue-400" />
            <input name="latest-role-end-date" placeholder="End Date (or leave blank)" className="block w-full rounded-md border border-gray-300 p-3 focus:outline-blue-400" />
            <textarea name="role-description" placeholder="Describe your responsibilities" className="block w-full rounded-md border border-gray-300 p-3 focus:outline-blue-400" rows={4} />
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="space-y-6">
            <input name="highest-degree" placeholder="Highest Degree" className="block w-full rounded-md border border-gray-300 p-3 focus:outline-blue-400 " />
            <input name="school" placeholder="School / University" className="block w-full rounded-md border border-gray-300 p-3 focus:outline-blue-400" />
            <input name="certifications" placeholder="Certifications (if any)" className="block w-full rounded-md border border-gray-300 p-3 focus:outline-blue-400" />
            <input name="grad-year" placeholder="Graduation Year (YYYY)" className="block w-full rounded-md border border-gray-300 p-3 focus:outline-blue-400" />
          </div>
        </section>

   

        {/* Reference */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Reference</h2>
          <div className="space-y-6">
            <input name="reference-name" placeholder="Reference Name" className="block w-full rounded-md border border-gray-300 p-3 focus:outline-blue-400" />
            <input name="reference-relationship" placeholder="Relationship" className="block w-full rounded-md border border-gray-300 p-3 focus:outline-blue-400 " />
            <input name="reference-contact" placeholder="Phone or Email" className="block w-full rounded-md border border-gray-300 p-3 focus:outline-blue-400 " />
            <div className="flex items-start space-x-3">
              <input type="checkbox" id="bgv-consent" name="bgv-consent" className="mt-1" />
              <label htmlFor="bgv-consent" className="text-sm text-gray-700">I consent to a background check</label>
            </div>
          </div>
        </section>

        {/* Submit */}
        <div className="text-center">
          <button type="submit" disabled={state.submitting} className="mt-8 px-8 py-4 bg-blue-400 text-white font-semibold rounded-md hover:bg-blue-500">
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}
